import { Component, OnInit } from '@angular/core';
import {Computer} from '../../model/computer.model';
import {ItemService} from '../../service/item/item.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.less']
})
export class ComputerComponent implements OnInit {

  computerList: Computer[];

  loading = true;
  pageIndex = 1;
  total: number;
  totalPage: number;

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
    this.itemService$.getComputerList(pageIndex, 8, this.filterOptions.name, this.filterOptions.priceMin, this.filterOptions.priceMax).subscribe( result => {
      this.loading =false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / this.pageIndex);
      this.pageIndex = pageIndex;
      this.computerList = result.list;
    })
  }

  search(event: any) {
    this.filterOptions.name = event;
    this.pageIndex = 1;
    this.searchData();
  }

}
