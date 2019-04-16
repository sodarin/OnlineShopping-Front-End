import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {AddressService} from '../../service/address/address.service';
import {Client} from '../../model/client.model';
import {Address} from '../../model/address.model';
import {ShoppingCartItem} from '../../model/shopping-cart-item.model';
import {ShoppingCartService} from '../../service/shoppingCart/shopping-cart.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  confirmModal: NzModalRef;

  user: Client;
  addressList: Address[];

  //选择地址部分所需数据
  selectAddrId: number;
  selectResult = {name: '', addr: ''};

  //购物车部分所需数据
  shoppingCartItemList: ShoppingCartItem[];

  displayData: any[] = [];
  isAllDataChecked: boolean = false;
  isIndeterminate: boolean = false;

  mapofCheckedId: { [key: string]: boolean } = {};



  pageIndex = 1;

  totalPrice: number = 0;


  constructor(
    private loginService$: LoginService,
    private addressService$: AddressService,
    private shoppingCartService$: ShoppingCartService,
    private _modal: NzModalService,
    private _message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.loginService$.user;
    if (this.user == null) {
      this.router.navigateByUrl('');
      this._message.warning("请先登录");
    } else {
      this.searchAddress();
      this.searchData();
    }
  }

  searchAddress(selectId?) {
    this.addressService$.getAddressListByUserId(this.user.userId).subscribe( result => {
      this.addressList = result;
      if (selectId == null)
        this.selectAddrId = this.addressList[0].addressId;
      else
        this.selectAddrId = selectId;
      this.changeSelectResult();
    }, error1 => this._message.error(error1.error));
  }

  //地址操作
  detectAddrDelete(addrId: number) {
    this.addressService$.deleteAddress(this.user.userId, addrId).subscribe( result => {
      this._message.success("删除地址成功！");
      if (addrId == this.selectAddrId)
        this.selectAddrId = this.addressList[0].addressId;
      this.searchAddress(this.selectAddrId)
    }, error1 => this._message.error(error1.error))
  }

  detectAddrModify(addr: Address) {
    this.addressService$.updateAddress(addr).subscribe( result => {
      this._message.success("修改地址成功！");
      this.searchAddress(addr.addressId);
    }, error1 => this._message.error(error1.error))
  }

  addNewAddr(addr: Address) {
    this.addressService$.createAddress(addr).subscribe( result => {
      this._message.success("新增地址成功！");
      this.searchAddress(this.selectAddrId)
    }, error1 => this._message.error(error1.error))
  }

  //地址选择
  changeSelectResult() {
    let addr = this.addressList.filter(item => item.addressId === this.selectAddrId)[0];
    this.selectResult.name = addr.recipientName;
    this.selectResult.addr = addr.detailAddress
  }

  detectSelectChange() {
    this.changeSelectResult()
  }

  //购物车商品选择
  checkAll(value: boolean) {
    this.displayData.forEach(item => {
      this.mapofCheckedId[item.id] = value;
      this.totalPrice += item.item_num * item.itemPrice
    });
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDataChecked = this.displayData.every(item => this.mapofCheckedId[item.id]);
    this.isIndeterminate =
      this.displayData.some(item => this.mapofCheckedId[item.id]) && !this.isAllDataChecked;
    this.calculateTotalPrice()
  }

  //页码变化改变显示数据
  searchData(reset: boolean = false): void {
    this.displayData = [];
    this.mapofCheckedId = {};
    if (reset) {
      this.pageIndex = 1;
    }
    this.shoppingCartItemList = this.shoppingCartService$.getShoppingCartItemsByPageIndex(this.pageIndex);
    this.shoppingCartItemList.forEach(item => {
      this.displayData.push({
        id: item.id,
        itemId: item.itemId,
        name: item.itemName,
        imgUrl: item.imgUrl,
        itemPrice: item.itemPrice,
        item_num: item.item_num
      })
    });
    this.refreshStatus()
  }

  //跳转到详情页面
  turnToDetailPage(data: any) {
    this.router.navigateByUrl(`/detail/${data.itemId}`)
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.displayData.forEach(item => {
      if (this.mapofCheckedId[item.id]) {
        this.totalPrice += item.item_num * item.itemPrice;
      }
    })
  }

  changeTotalPrice() {
    this.calculateTotalPrice()
  }

  purchase() {
    this.confirmModal = this._modal.confirm({
      nzTitle: '确认购买？',
      nzContent: `这笔订单收件人为${this.selectResult.name}，收件地址为${this.selectResult.addr}，总价为￥${this.totalPrice}`,
      nzOkText: '买意已决',
      nzCancelText: '我再想想',
      nzOnOk: () => {
        console.log();
        this._message.success('下单成功！');
      }
    })
  }

}
