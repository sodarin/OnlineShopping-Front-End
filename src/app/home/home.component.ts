import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {LoginModalComponent} from '../core/modal/login-modal/login-modal.component';
import {CellphoneService} from '../service/cellphone/cellphone.service';
import {Cellphone} from '../model/cellphone.model';
import {Computer} from '../model/computer.model';
import {ComputerService} from '../service/computer/computer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isLogin: boolean;

  cellphoneList: Cellphone[] = [];
  computerList: Computer[] = [];

  displayTypes = [
    {name: '电脑', list: this.computerList},
    {name: '手机', list: this.cellphoneList},
    {name: '鼠标', list: this.cellphoneList},
    {name: '键盘', list: this.cellphoneList},
    {name: '耳机', list: this.cellphoneList},
  ];


  constructor(
    private loginService$: LoginService,
    private cellphoneService$: CellphoneService,
    private computerService$: ComputerService
    ) {
    this.loginService$.loginStatus.subscribe(value => this.isLogin = value);
    this.computerList.push(...this.computerService$.getLatestComputerList());
    this.cellphoneList.push(...this.cellphoneService$.getLatestCellphoneList());

  }

  ngOnInit() {



  }



}
