import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../model/order.model';
import {Router} from '@angular/router';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent implements OnInit {

  @Input()
  item: Order;

  itemList: any[] = [];

  price: number = 0;

  constructor(
    private router: Router,
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
    this.item.orderItems.forEach( item => {
      this.itemList.push({
        id: item.itemId,
        name: item.itemName,
        img: item.itemImg,
        num: item.itemNum,
        totalPrice: item.itemPrice * item.itemNum
      })
    });
    this.itemList.forEach(item => this.price += item.totalPrice)
  }

  turnToDetailPage(itemData: any) {
    this._modal.destroy();
    this.router.navigateByUrl(`/detail/${itemData.id}`)
  }

}
