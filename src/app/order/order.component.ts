import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/order/order.service';
import {Order} from '../model/order.model';
import {StatusEnum} from '../model/statusEnum.model';

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

  constructor(
    private orderService$: OrderService
  ) { }

  ngOnInit() {
    this.orderList = this.orderService$.getOrderListByClientId();
    this.pendingOrderList = this.orderList.filter(item => item.status == StatusEnum.PENDING);
    this.shippingOrderList = this.orderList.filter(item => item.status == StatusEnum.SHIPPING);
    this.completedOrderList = this.orderList.filter(item => item.status == StatusEnum.COMPLETED);
    this.refundRequestedOrderList = this.orderList.filter(item => item.status == StatusEnum.REFUND_REQUESTED);
    this.refundOrderList = this.orderList.filter(item => item.status == StatusEnum.REFUND)
  }

}
