import {Component, EventEmitter, Input, OnChanges, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {RecycleItemDisplay} from '../../model/recycleOrder.model';
import {NzEmptyService, NzMessageService, NzModalRef, NzModalService} from 'ng-zorro-antd';
import {RecycleStatus} from '../../model/recycleStatus';
import {ShowRecycleDetailComponent} from '../modal/show-recycle-detail/show-recycle-detail.component';
import {LoginService} from '../../service/login/login.service';
import {RecycleDisplayEnum} from '../../model/recycleDisplayEnum';
import {RecycleService} from '../../service/recycle/recycle.service';

@Component({
  selector: 'app-recycle-table',
  templateUrl: './recycle-table.component.html',
  styleUrls: ['./recycle-table.component.less']
})
export class RecycleTableComponent implements OnInit, OnChanges {

  recycleOrderStatus = RecycleDisplayEnum;

  @Input()
  recycleItemList: RecycleItemDisplay[];

  @Output()
  confirmEvent = new EventEmitter();

  @ViewChild('customEmpty') customTpl: TemplateRef<any>;

  displayData: any[] = [];
  totalData: any[] = [];

  pageIndex: number = 1;

  confirmModal: NzModalRef;
  constructor(
    private _modal: NzModalService,
    private nzEmptyService: NzEmptyService,
    private loginService$: LoginService,
    private recycleService$: RecycleService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.totalData = [];
    if (this.recycleItemList) {
      this.recycleItemList.forEach(item => {
        this.totalData.push({
          recycleOrderID: item.recycleOrderId,
          orderId: item.orderId,
          itemId: item.itemId,
          userId: item.userId,
          itemName: item.name,
          recyclePrice: item.recyclePrice,
          status: item.status,
          requestedTime: item.requestedTime,
          type: item.type
        })
      });
      this.searchData()
    } else {
      if (!this.loginService$.user)
        this.nzEmptyService.setDefaultContent(this.customTpl);
    }
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

  showDetail(data: any) {
    this._modal.create({
      nzTitle: '回收产品详情',
      nzContent: ShowRecycleDetailComponent,
      nzComponentParams: {
        data: data
      },
      nzFooter: null
    })
  }

  confirmRecycle(data: any) {
    this.confirmModal = this._modal.confirm({
      nzTitle: '确认回收？',
      nzContent: `原订单编号${data.orderId}，商品名${data.itemName}，回收价格为${data.recyclePrice.toFixed(2)}`,
      nzOkText: '确定回收',
      nzOnOk: () => {
        this.recycleService$.updateRecycleStatus(data.recycleOrderID, RecycleStatus.COMPLETED).subscribe( result => {
          this._message.success("回收成功！");
          this.confirmEvent.emit()
        }, error1 => this._message.error(error1.error))
      },
      nzCancelText: '取消'
    })
  }

  cancelRecycle(data: any) {
    this.confirmModal = this._modal.confirm({
      nzTitle: '是否取消回收？',
      nzContent: `回收订单编号${data.recycleOrderID}，商品名${data.itemName}，回收价格为${data.recyclePrice.toFixed(2)}`,
      nzOkText: '取消回收',
      nzOnOk: () => {
        this.recycleService$.updateRecycleStatus(data.recycleOrderID, RecycleStatus.CANCELLED).subscribe( result => {
          this._message.success("取消回收请求成功！");
          this.confirmEvent.emit()
        }, error1 => this._message.error(error1.error))
      },
      nzCancelText: '关闭窗口'
    })
  }


}
