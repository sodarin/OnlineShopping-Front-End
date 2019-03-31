import {Component, OnInit} from '@angular/core';
import {RecycleService} from '../service/recycle/recycle.service';
import {RecycleItemDisplay} from '../model/recycleOrder.model';
import {RecycleStatus} from '../model/recycleStatus';

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
    private recycle$: RecycleService
  ) { }

  ngOnInit() {
    this.recycleDisplayList = this.recycle$.getRecycleItemDisplayListByClientId();
    this.requestedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.REQUESTED);
    this.auditedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.PASSED || item.status == RecycleStatus.NOT_PASSED);
    this.completedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.COMPLETED);
    this.cancelledRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.CANCELLED)
  }

}
