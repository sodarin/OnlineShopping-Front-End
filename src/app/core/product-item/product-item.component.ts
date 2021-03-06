import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../model/item.model';
import {LoginService} from '../../service/login/login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Route, Router} from '@angular/router';
import {ShoppingCartService} from '../../service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {

  @Input()
  item: Item;

  @Input()
  loading: boolean;

  isLogin: boolean;

  constructor(
    private loginService$: LoginService,
    private _message: NzMessageService,
    private shoppingCartService$: ShoppingCartService,
    private router: Router
  ) {
    this.loginService$.loginStatus.subscribe(value => this.isLogin = value);
  }

  ngOnInit() {}

  static stopPropagation() {
    event.stopPropagation();
  }

  addToShoppingCart() {
    ProductItemComponent.stopPropagation();
    if (!this.isLogin) {
      this._message.error('请先登录');
    } else {
      this.shoppingCartService$.createShoppingCartItem(this.loginService$.user.userId, this.item.itemId, 1).subscribe( result => {
        this._message.success('成功添加入购物车');
      }, error1 => this._message.error(error1.error))
    }
  }

  turnToDetailPage() {
    this.router.navigateByUrl(`/detail/${this.item.itemId}`);
  }

}
