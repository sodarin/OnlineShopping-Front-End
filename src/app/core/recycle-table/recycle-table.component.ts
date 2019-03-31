import {Component, Input, OnInit} from '@angular/core';
import {RecycleItemDisplay} from '../../model/recycleOrder.model';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {RecycleStatus} from '../../model/recycleStatus';

@Component({
  selector: 'app-recycle-table',
  templateUrl: './recycle-table.component.html',
  styleUrls: ['./recycle-table.component.less']
})
export class RecycleTableComponent implements OnInit {

  @Input()
  recycleItemList: RecycleItemDisplay[];

  displayData: any[] = [];
  totalData: any[] = [];

  pageIndex: number = 1;

  confirmModal: NzModalRef;
  constructor(
    private _modal: NzModalService
  ) { }

  ngOnInit() {
    this.recycleItemList.forEach(item => {
      this.totalData.push({
        recycleOrderID: item.recycleOrderId,
        orderId: item.orderId,
        itemId: item.itemId,
        itemName: item.itemName,
        recyclePrice: item.recyclePrice,
        status: item.status,
        requestedTime: item.requestedTime,
        reason: item.reason
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

  showDetail(id: string) {

  }

  confirmRecycle(data: any) {
    this.confirmModal = this._modal.confirm({
      nzTitle: '确认回收？',
      nzContent: `原订单编号${data.orderId}，商品名${data.itemName}，回收价格为${data.recyclePrice}`,
      nzOkText: '确定回收',
      nzOnOk: () => {
        data.status = RecycleStatus.COMPLETED
      },
      nzCancelText: '取消'
    })
  }

  cancelRecycle(data: any) {
    this.confirmModal = this._modal.confirm({
      nzTitle: '是否取消回收？',
      nzContent: `回收订单编号${data.recycleOrderID}，商品名${data.itemName}，回收价格为${data.recyclePrice}`,
      nzOkText: '取消回收',
      nzOnOk: () => {
        data.status = RecycleStatus.CANCELLED
      },
      nzCancelText: '关闭窗口'
    })
  }


}
