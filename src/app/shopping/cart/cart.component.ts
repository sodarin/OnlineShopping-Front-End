import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {AddressService} from '../../service/address/address.service';
import {Client} from '../../model/client.model';
import {Address} from '../../model/address.model';
import {ShoppingCartItem} from '../../model/shopping-cart-item.model';
import {ShoppingCartService} from '../../service/shoppingCart/shopping-cart.service';
import {Computer} from '../../model/computer.model';
import {Cellphone} from '../../model/cellphone.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  user: Client;
  addressList: Address[];

  //选择地址部分所需数据
  selectAddrId: string;
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
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.loginService$.getUserById();
    this.addressList = this.addressService$.getAddressListByClientId(this.user.id);
    this.selectAddrId = this.addressList[0].addressId;
    this.changeSelectResult();

    this.searchData();

  }

  //地址操作
  detectAddrDelete(addrId: string) {
    this.addressList = this.addressList.filter(item => item.addressId !== addrId);
    if (addrId == this.selectAddrId) {
      this.selectAddrId = this.addressList[0].addressId;
      this.changeSelectResult()
    }
  }

  detectAddrModify(addr: Address) {
    this.addressList.forEach((item, index) => {
      if (item.addressId == addr.addressId){
        this.addressList[index] = addr;
      }
    });
    this.changeSelectResult()
  }

  addNewAddr(addr: Address) {
    this.addressList.push(addr)
  }

  //地址选择
  changeSelectResult() {
    let addr = this.addressList.filter(item => item.addressId === this.selectAddrId)[0];
    this.selectResult.name = addr.client_name;
    this.selectResult.addr = addr.detailAddr
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

  }

}
