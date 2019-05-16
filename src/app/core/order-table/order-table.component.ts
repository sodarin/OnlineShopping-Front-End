import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Order} from '../../model/order.model';
import {NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';
import {StatusEnum} from '../../model/statusEnum.model';
import {OrderDetailComponent} from '../modal/order-detail/order-detail.component';
import {OrderService} from '../../service/order/order.service';
import {OrderDisplayEnum} from '../../model/orderDisplayEnum';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.less']
})
export class OrderTableComponent implements OnInit, OnChanges {

  orderDisplayEnum = OrderDisplayEnum;

  @Input()
  orders: Order[];

  @Output()
  refundEvent = new EventEmitter();

  totalPrice;


  
  totalData: any[] = [];

  displayData: any[] = [];

  pageIndex: number = 1;

  confirmModal: NzModalRef;

  constructor(
    private _modal: NzModalService,
    private _message: NzMessageService,
    private orderService$: OrderService,
  ) { }

  ngOnInit() {

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
      nzContent: `订单编号${data.id}，总价为${data.price.toFixed(2)}元`,
      nzOkText: '申请退款',
      nzOnOk: () => {
        this.orderService$.updateOrderStatus(data.id, StatusEnum.REFUND_REQUESTED).subscribe( result => {
          this._message.success("申请成功！");
          this.refundEvent.emit();
        }, error1 => this._message.error(error1.error))
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

  ngOnChanges() {
    this.totalData = [];
    if (this.orders) {
      this.orders.forEach(item => {
        this.totalData.push({
          id: item.orderId,
          addressId: item.addressId,
          userId: item.userId,
          orderItems: item.orderItemDetails,
          price: 0,
          status: item.status,
          orderTime: item.tradingTime
        })
      });
      this.totalData.forEach(item => {
        this.totalPrice = 0;
        item.orderItems.forEach(order => {
          this.totalPrice += order.price * order.number
        });
        item.price = this.totalPrice
      });
      this.totalData = [...this.totalData];
      this.searchData()
    }
  }

}
