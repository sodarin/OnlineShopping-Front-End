import {Component, OnInit} from '@angular/core';
import {RecycleService} from '../service/recycle/recycle.service';
import {RecycleItemDisplay} from '../model/recycleOrder.model';
import {RecycleStatus} from '../model/recycleStatus';
import {NzModalService} from 'ng-zorro-antd';
import {AddRecycleOrderComponent} from '../core/modal/add-recycle-order/add-recycle-order.component';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.less']
})
export class RecycleComponent implements OnInit {

  recycleDisplayList: RecycleItemDisplay[];
  requestedRecycleDisplayList: RecycleItemDisplay[];
  auditedRecycleDisplayList: RecycleItemDisplay[];
  completedRecycleDisplayList: RecycleItemDisplay[];
  cancelledRecycleDisplayList: RecycleItemDisplay[];

  constructor(
    private recycle$: RecycleService,
    private _modal: NzModalService
  ) { }

  ngOnInit() {
    this.recycleDisplayList = this.recycle$.getRecycleItemDisplayListByClientId();
    this.auditedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.PASSED || item.status == RecycleStatus.NOT_PASSED);
    this.completedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.COMPLETED);
    this.cancelledRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.CANCELLED)
  }

  openRequestRecycleModal() {
    this._modal.create({
      nzTitle: '我要回收',
      nzContent: AddRecycleOrderComponent,
      nzWidth: 650,
      nzFooter: null
    })
  }

}
