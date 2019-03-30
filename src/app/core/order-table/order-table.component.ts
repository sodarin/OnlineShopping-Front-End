import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderItem} from '../../model/orderItem.model';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {StatusEnum} from '../../model/statusEnum.model';
import {OrderDetailComponent} from '../modal/order-detail/order-detail.component';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.less']
})
export class OrderTableComponent implements OnInit {

  @Input()
  orders: Order[];


  
  totalData: any[] = [];

  displayData: any[] = [];

  pageIndex: number = 1;

  confirmModal: NzModalRef;

  constructor(
    private _modal: NzModalService
  ) { }

  ngOnInit() {
    this.orders.forEach(item => {
      this.totalData.push({
        id: item.orderId,
        orderItems: item.orderItems,
        price: item.price,
        clientName: item.clientName,
        clientAddr: item.clientAddr,
        clientPhone: item.clientPhone,
        clientPostcode: item.clientPostcode,
        status: item.status,
        orderTime: item.orderTime
      })
    });
    this.searchData()
  }

  searchData() {
    this.displayData = [];
    let totalPage = this.totalData.length / 8;
    if (this.pageIndex == totalPage) {
      this.displayData = this.totalData.slice((this.pageIndex - 1) * 8, -1)
    } else {
      this.displayData = this.totalData.slice((this.pageIndex - 1) * 8, this.pageIndex * 8);
    }
  }

  refundRequested(data: any) {
    this.confirmModal = this._modal.confirm({
      nzTitle: '确认退款？',
      nzContent: `订单编号${data.id}，总价为${data.price}，收件人姓名${data.clientName}，收件地址${data.clientAddr}`,
      nzOkText: '申请退款',
      nzOnOk: () => {
        data.status = StatusEnum.REFUND_REQUESTED;
      },
      nzCancelText: '取消'
    })
  }

  showOrderDetail(data: any) {
    this._modal.create({
      nzTitle: '订单详情',
      nzContent: OrderDetailComponent,
      nzComponentParams: {
        item: data
      },
      nzFooter: null
    })
  }

}
