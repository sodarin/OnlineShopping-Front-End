import { Component, OnInit } from '@angular/core';
import {Earphone} from '../../model/earphone.model';
import {ItemService} from '../../service/item/item.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.less']
})
export class HeadphonesComponent implements OnInit {

  pageIndex = 1;
  total: number;
  totalPage: number;
  loading = true;

  earphoneList: Earphone[];

  filterOptions = {name: '', priceMin: '', priceMax: ''};

  constructor(
    private itemService$: ItemService
  ) { }

  ngOnInit() {
    this.searchData()
  }

  newPage() {
    this.searchData();
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.loading = true;
    this.itemService$.getEarphoneList(pageIndex, 8, this.filterOptions.name, this.filterOptions.priceMin, this.filterOptions.priceMax).subscribe( result => {
      this.loading =false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / this.pageIndex);
      this.pageIndex = pageIndex;
      this.earphoneList = result.list;
    })
  }

  search(event: any) {
    this.filterOptions.name = event;
    this.pageIndex = 1;
    this.searchData();
  }

}
