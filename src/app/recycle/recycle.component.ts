import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {RecycleService} from '../service/recycle/recycle.service';
import {RecycleItemDisplay} from '../model/recycleOrder.model';
import {RecycleStatus} from '../model/recycleStatus';
import {NzEmptyService, NzMessageService, NzModalService} from 'ng-zorro-antd';
import {AddRecycleOrderComponent} from '../core/modal/add-recycle-order/add-recycle-order.component';
import {LoginService} from '../service/login/login.service';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.less']
})
export class RecycleComponent implements OnInit {

  isLogin: boolean = false;

  recycleDisplayList: RecycleItemDisplay[];
  auditedRecycleDisplayList: RecycleItemDisplay[];
  completedRecycleDisplayList: RecycleItemDisplay[];
  cancelledRecycleDisplayList: RecycleItemDisplay[];



  constructor(
    private recycle$: RecycleService,
    private _modal: NzModalService,
    private loginService$: LoginService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.loginService$.loginStatus.subscribe(value => {
      this.isLogin = value;
      if (this.isLogin) {
        this.searchData()
      } else {
        this.recycleDisplayList = null;
        this.auditedRecycleDisplayList = null;
        this.completedRecycleDisplayList = null;
        this.cancelledRecycleDisplayList = null;
      }
    });
  }

  searchData() {
    this.recycleDisplayList = [];
    this.recycle$.getRecycleOrderList(this.loginService$.user.userId).subscribe( result => {
      this.recycleDisplayList = result;
      this.auditedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.PASSED || item.status == RecycleStatus.NOT_PASSED);
      this.completedRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.COMPLETED);
      this.cancelledRecycleDisplayList = this.recycleDisplayList.filter(item => item.status == RecycleStatus.CANCELLED)
    }, error1 => this._message.error(error1.error))
  }

  openRequestRecycleModal() {
    if (this.loginService$.user) {
      const modal = this._modal.create({
        nzTitle: '我要回收',
        nzContent: AddRecycleOrderComponent,
        nzWidth: 650,
        nzFooter: null,
      });
      modal.afterClose.subscribe(result => {
        if (result == "success")
          this.searchData()
      })
    } else {
      this._message.warning("请先登录")
    }

  }

  requestNewData() {
    this.searchData()
  }

}
