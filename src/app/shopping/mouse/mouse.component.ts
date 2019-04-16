import { Component, OnInit } from '@angular/core';
import {Mouse} from '../../model/mouse.model';
import {ItemService} from '../../service/item/item.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.less']
})
export class MouseComponent implements OnInit {

  pageIndex = 1;
  total: number;
  totalPage: number;
  loading = true;
  filterOptions = {name: '', priceMin: '', priceMax: ''};


  mouseList: Mouse[];

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
    this.itemService$.getMouseList(pageIndex, 8, this.filterOptions.name, this.filterOptions.priceMin, this.filterOptions.priceMax).subscribe( result => {
      this.loading =false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / this.pageIndex);
      this.pageIndex = pageIndex;
      this.mouseList = result.list;
    })
  }

  search(event: any) {
    this.filterOptions.name = event;
    this.pageIndex = 1;
    this.searchData();
  }

}
