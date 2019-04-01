import { Component, OnInit } from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {OrderService} from '../../../service/order/order.service';
import {Order} from '../../../model/order.model';
import {OrderItem} from '../../../model/orderItem.model';

@Component({
  selector: 'app-add-recycle-order',
  templateUrl: './add-recycle-order.component.html',
  styleUrls: ['./add-recycle-order.component.less']
})
export class AddRecycleOrderComponent implements OnInit {

  current = 0;

  orderId: string;
  specifiedOrder: Order = null;
  orderItemsList: OrderItem[];
  selectedItem: OrderItem;


  constructor(
    private _modal: NzModalRef,
    private _message: NzMessageService,
    private orderService$: OrderService
  ) { }

  ngOnInit() {
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  submit() {
    this._modal.destroy()
  }

  cancel() {
    this._modal.destroy()
  }

  searchOrderById() {
    if (this.orderId == '') {
      this._message.error('订单编号不能为空')
    } else {
      this.specifiedOrder = this.orderService$.getOrderItemListByOrderId(this.orderId);
      if (this.specifiedOrder == null)
        this._message.error('没有指定的订单编号');
      else {
        this.orderItemsList = this.specifiedOrder.orderItems;
        this._message.success('已查询到指定订单')
      }
    }
  }

  selectRecycleItem(item: OrderItem) {
    this.selectedItem = item;
  }

}
