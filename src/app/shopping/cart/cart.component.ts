import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {AddressService} from '../../service/address/address.service';
import {Client} from '../../model/client.model';
import {Address} from '../../model/address.model';
import {ShoppingCartItem} from '../../model/shopping-cart-item.model';
import {ShoppingCartService} from '../../service/shoppingCart/shopping-cart.service';
import {Router} from '@angular/router';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';
import {OrderService} from '../../service/order/order.service';
import {OrderItemParam} from '../../model/orderItemParam.model';

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

  displayData: ShoppingCartItem[] = [];
  isAllDataChecked: boolean = false;
  isIndeterminate: boolean = false;

  mapofCheckedId: { [key: number]: boolean } = {};
  mapofItemId: { [key: number]: number} = {};
  mapofPrice: { [key: number]: number} = {};
  mapofNumber: { [key: number]: number} = {};



  loading = true;
  pageIndex = 1;
  total: number;
  totalPage: number;

  totalPrice: number = 0;


  constructor(
    private loginService$: LoginService,
    private addressService$: AddressService,
    private shoppingCartService$: ShoppingCartService,
    private _modal: NzModalService,
    private _message: NzMessageService,
    private orderService$: OrderService,
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
      this.mapofCheckedId[item.shoppingCartItemId] = value;
      this.mapofItemId[item.shoppingCartItemId] = item.itemId;
      this.mapofPrice[item.shoppingCartItemId] = item.price;
      this.mapofNumber[item.shoppingCartItemId] = item.totalNumber;
      this.totalPrice += item.totalNumber * item.price
    });
    this.refreshStatus();
  }

  refreshStatus(): void {
    if (this.displayData.length > 0) {
      this.displayData.forEach( item => {
        if (this.mapofCheckedId[item.shoppingCartItemId]) {
          this.mapofItemId[item.shoppingCartItemId] = item.itemId;
          this.mapofPrice[item.shoppingCartItemId] = item.price;
          this.mapofNumber[item.shoppingCartItemId] = item.totalNumber;
        }
        if (!this.mapofCheckedId[item.shoppingCartItemId]) {
          delete this.mapofPrice[item.shoppingCartItemId];
          delete this.mapofItemId[item.shoppingCartItemId];
          delete this.mapofNumber[item.shoppingCartItemId];
        }
      });
    }
    this.isAllDataChecked = this.displayData.every(item => this.mapofCheckedId[item.shoppingCartItemId]);
    this.isIndeterminate =
      this.displayData.some(item => this.mapofCheckedId[item.shoppingCartItemId]) && !this.isAllDataChecked;
    this.calculateTotalPrice()
  }

  //页码变化改变显示数据
  searchData(pageIndex: number = this.pageIndex) {
    this.displayData = [];
    this.loading = true;
    this.shoppingCartService$.getShoppingCartItemList(pageIndex, 8, this.user.userId).subscribe( result => {
      this.loading = false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / this.pageIndex);
      this.pageIndex = pageIndex;
      this.shoppingCartItemList = result.list;
      this.displayData = this.shoppingCartItemList;
      this.refreshStatus();
    }, error1 => this._message.error(error1.error));
  }

  //跳转到详情页面
  turnToDetailPage(data: any) {
    this.router.navigateByUrl(`/detail/${data.itemId}`)
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    for (let item in this.mapofPrice) {
      this.totalPrice += this.mapofPrice[item] * this.mapofNumber[item];
    }
  }

  changeTotalPrice(shoppingCartItemId: number, totalNumber: number) {
    let n;
    this.shoppingCartService$.updateShoppingCartItemNumber(shoppingCartItemId, totalNumber).subscribe( result => {
      this.shoppingCartService$.getShoppingCartItemById(shoppingCartItemId).subscribe( result => {
        this.displayData.forEach( (item, index) => {
          if (item.shoppingCartItemId == result.shoppingCartItemId) {
            n = index;
          }
        });
        this.displayData[n] = result;
        this.displayData = [...this.displayData];
        for (let key in this.mapofNumber) {
          if (key == result.shoppingCartItemId.toString())
            this.mapofNumber[key] = result.totalNumber
        }
        this.calculateTotalPrice();
      }, error1 => this._message.error(error1.error))
    }, error1 => this._message.error(error1.error));
  }

  purchase() {
    this.confirmModal = this._modal.confirm({
      nzTitle: '确认购买？',
      nzContent: `这笔订单收件人为${this.selectResult.name}，收件地址为${this.selectResult.addr}，总价为￥${this.totalPrice.toFixed(2)}`,
      nzOkText: '买意已决',
      nzCancelText: '我再想想',
      nzOnOk: () => {
        let orderItem: OrderItemParam[] = [];
        for (let key in this.mapofCheckedId) {
          if (this.mapofCheckedId) {
            orderItem.push(new OrderItemParam(this.mapofItemId[key], this.mapofNumber[key]))
          }
        }
        let tempMap = this.mapofCheckedId;
        this.orderService$.createNewOrder(this.loginService$.user.userId, this.selectAddrId, orderItem).subscribe( result => {
          for (let key in tempMap) {
            this.shoppingCartService$.deleteShoppingCartItem(Number(key)).subscribe( result => {
              this.searchData(this.pageIndex);
            })
          }
          this.mapofCheckedId = {};
          this.mapofPrice = {};
          this.mapofItemId = {};
          this.mapofNumber = {};
          this.totalPrice = 0;
          this._message.success("下单成功！")
        }, error1 => this._message.error(error1.error))
      }
    })
  }

  deleteItemFromShoppingCart(shoppingCartItemId: number) {
    this.shoppingCartService$.deleteShoppingCartItem(shoppingCartItemId).subscribe( result => {
      this._message.success("删除成功！");
      this.searchData(this.pageIndex);
    }, error1 => this._message.error(error1.error))
  }

}
