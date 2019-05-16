import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../../model/item.model';
import {LoginService} from '../../service/login/login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ItemService} from '../../service/item/item.service';
import {ShoppingCartService} from '../../service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less']
})
export class DetailPageComponent implements OnInit {

  item: Item;

  number: number = 1;

  isLogin: boolean;

  constructor(
    private routeInfo: ActivatedRoute,
    private itemService$: ItemService,
    private loginService$: LoginService,
    private shoppingCartService$: ShoppingCartService,
    private _message: NzMessageService,
  ) {
    this.loginService$.loginStatus.subscribe(value => this.isLogin = value)
  }

  ngOnInit() {
    let itemId = this.routeInfo.snapshot.params['id'];
    this.itemService$.getDetailById(itemId).subscribe( result => {
      this.item = result;
    })
  }

  addToShoppingCart() {
    if (!this.isLogin) {
      this._message.error('请先登录');
    } else {
      this.shoppingCartService$.createShoppingCartItem(this.loginService$.user.userId, this.item.itemId, this.number).subscribe( result => {
        this._message.success('成功添加入购物车');
      }, error1 => this._message.error(error1.error))
    }
  }

}
