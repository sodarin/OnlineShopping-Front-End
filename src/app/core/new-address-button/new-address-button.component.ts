import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {Address} from '../../model/address.model';
import {LoginService} from '../../service/login/login.service';
import {Client} from '../../model/client.model';
import {AddrModalComponent} from '../modal/addr-modal/addr-modal.component';

@Component({
  selector: 'app-new-address-button',
  templateUrl: './new-address-button.component.html',
  styleUrls: ['./new-address-button.component.less']
})
export class NewAddressButtonComponent implements OnInit {

  user: Client;

  @Output()
  newAddrEvent = new EventEmitter<Address>();

  constructor(
    private _modal: NzModalService,
    private _message: NzMessageService,
    private loginService$: LoginService
  ) { }

  ngOnInit() {
    this.user = this.loginService$.user;
  }

  createNewAddr() {
    const item = new Address(this.user.userId, null, this.user.username, '', '', '');
    const modal = this._modal.create({
      nzTitle: '新增地址',
      nzContent: AddrModalComponent,
      nzComponentParams: {
        item: item
      },
      nzOkText: '确认新增地址',
      nzOnOk: instance => instance.submit(),
      nzCancelText: '取消',
      nzOnCancel: instance => instance.closeDialog()
    });
    modal.afterClose.subscribe(result => {
      if (result) {
        this.newAddrEvent.emit(result);
      }
    })
  }

}
