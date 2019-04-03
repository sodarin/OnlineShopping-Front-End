import {Component, Input, OnInit} from '@angular/core';
import {RecycleService} from '../../../service/recycle/recycle.service';
import {RecycleItemDetail} from '../../../model/recycleItemDetail.model';

@Component({
  selector: 'app-show-recycle-detail',
  templateUrl: './show-recycle-detail.component.html',
  styleUrls: ['./show-recycle-detail.component.less']
})
export class ShowRecycleDetailComponent implements OnInit {

  @Input()
  recycleOrderId: string;

  recycleItemDetail: RecycleItemDetail;

  constructor(
    private recycleService$: RecycleService
  ) { }

  ngOnInit() {
    this.recycleItemDetail = this.recycleService$.getRecycleItemDetailByRecycleOrderId(this.recycleOrderId)
  }

}
