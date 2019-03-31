import {Component, Input, OnInit} from '@angular/core';
import {RecycleItemDisplay} from '../../model/recycleOrder.model';

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

  constructor() { }

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

  confirmRecycle(id: string) {

  }

  cancelRecycle(id: string) {

  }


}
