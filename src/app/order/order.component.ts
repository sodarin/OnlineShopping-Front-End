import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order/order.service';
import {Order} from '../model/order.model';
import {StatusEnum} from '../model/statusEnum.model';
import {LoginService} from '../service/login/login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  orderList: Order[];
  pendingOrderList: Order[];
  shippingOrderList: Order[];
  completedOrderList: Order[];
  refundRequestedOrderList: Order[];
  refundOrderList: Order[];

  displayData: Order[];

  loading: boolean;

  constructor(
    private orderService$: OrderService,
    private loginService$: LoginService,
    private _message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.loginService$.user == null) {
      this.router.navigateByUrl('');
      this._message.warning("请先登录！")
    }
    this.searchData();
  }

  searchData() {
    this.orderList = [];
    this.loading = true;
    this.orderService$.getOrderList(this.loginService$.user.userId).subscribe( result => {
      this.loading = false;
      this.orderList = result.list;
      console.log(this.orderList);
      this.pendingOrderList = this.orderList.filter(item => item.status == StatusEnum.PENDING);
      this.shippingOrderList = this.orderList.filter( item => item.status == StatusEnum.SHIPPING);
      this.refundOrderList = this.orderList.filter(item => item.status == StatusEnum.REFUND);
      this.refundRequestedOrderList = this.orderList.filter(item => item.status == StatusEnum.REFUND_REQUESTED);
      this.completedOrderList = this.orderList.filter( item => item.status == StatusEnum.COMPLETED);
    }, error1 => this._message.error(error1.error));

  }

  requestNewData() {
    this.searchData()
  }

}
