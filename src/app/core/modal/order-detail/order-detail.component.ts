import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent implements OnInit {

  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
