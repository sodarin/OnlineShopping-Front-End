import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Cellphone} from '../model/cellphone.model';
import {Computer} from '../model/computer.model';
import {Mouse} from '../model/mouse.model';
import {Earphone} from '../model/earphone.model';
import {Keyboard} from '../model/keyboard.model';
import {ItemService} from '../service/item/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isLogin: boolean;

  cellphoneLoading: boolean = true;
  computerLoading: boolean = true;
  earphoneLoading: boolean = true;
  mouseLoading: boolean = true;
  keyboardLoading: boolean = true;

  cellphoneList: Cellphone[] = [];
  computerList: Computer[] = [];
  mouseList: Mouse[] = [];
  earphoneList: Earphone[] = [];
  keyboardList: Keyboard[] = [];

  displayTypes = [
    {name: '电脑', list: this.computerList, loading: this.computerLoading},
    {name: '手机', list: this.cellphoneList, loading: this.cellphoneLoading},
    {name: '鼠标', list: this.mouseList, loading: this.mouseLoading},
    {name: '键盘', list: this.keyboardList, loading: this.keyboardLoading},
    {name: '耳机', list: this.earphoneList, loading: this.earphoneLoading},
  ];


  constructor(
    private loginService$: LoginService,
    private itemService$: ItemService,
    private _message: NzMessageService
    ) {
    this.loginService$.loginStatus.subscribe(value => this.isLogin = value);

  }

  ngOnInit() {
    this.itemService$.getLatestCellphoneList().subscribe( result => {
      this.displayTypes[1].loading = false;
      this.cellphoneList.push(...result)
    }, error1 => this._message.error(error1.error));
    this.itemService$.getLatestComputerList().subscribe( result => {
      this.displayTypes[0].loading = false;
      this.computerList.push(...result)
    }, error1 => this._message.error(error1.error));
    this.itemService$.getLatestMouseList().subscribe( result => {
      this.displayTypes[2].loading = false;
      this.mouseList.push(...result)
    }, error1 => this._message.error(error1.error));
    this.itemService$.getLatestEarphoneList().subscribe( result => {
      this.displayTypes[4].loading = false;
      this.earphoneList.push(...result)
    }, error1 => this._message.error(error1.error));
    this.itemService$.getLatestKeyboardList().subscribe( result => {
      this.displayTypes[3].loading = false;
      this.keyboardList.push(...result)
    }, error1 => this._message.error(error1.error))
  }



}
