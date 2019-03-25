import {Component, Input, OnInit} from '@angular/core';
import {CellphoneService} from '../../service/cellphone/cellphone.service';
import {Item} from '../../model/item.model';
import {LoginService} from '../../service/login/login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {

  @Input()
  item: Item;

  isLogin: boolean;

  constructor(
    private loginService$: LoginService,
    private _message: NzMessageService,
    private router: Router
  ) {
    this.loginService$.loginStatus.subscribe(value => this.isLogin = value);
  }

  ngOnInit() {}

  stopPropagation() {
    event.stopPropagation();
  }

  addToShoppingCart() {
    this.stopPropagation();
    if (!this.isLogin) {
      this._message.error('请先登录');
    } else {
      this._message.success('成功添加入购物车');
    }
  }

  turnToDetailPage() {
    this.router.navigateByUrl(`/detail/${this.item.id}`);
  }

}