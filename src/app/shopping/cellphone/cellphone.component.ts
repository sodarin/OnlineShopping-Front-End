import { Component, OnInit } from '@angular/core';
import {Cellphone} from '../../model/cellphone.model';
import {ItemService} from '../../service/item/item.service';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.less']
})
export class CellphoneComponent implements OnInit {

  cellphoneList: Cellphone[];

  pageIndex = 1;
  total: number;
  totalPage: number;

  loading = true;

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
    this.itemService$.getCellphoneList(pageIndex, 8, this.filterOptions.name, this.filterOptions.priceMin, this.filterOptions.priceMax).subscribe( result => {
      this.loading =false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / this.pageIndex);
      this.pageIndex = pageIndex;
      this.cellphoneList = result.list;
    })
  }

  search(event: any) {
    this.filterOptions.name = event;
    this.pageIndex = 1;
    this.searchData();
  }

}
