import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {Client} from '../model/client.model';
import {NzMessageService} from 'ng-zorro-antd';
import {Address} from '../model/address.model';
import {AddressService} from '../service/address/address.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  data: any;
  addressList: Address[];

  user: Client;

  constructor(
    private loginService$: LoginService,
    private addressService$: AddressService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.user = this.loginService$.getUserById();
    this.addressList = this.addressService$.getAddressListByClientId(this.user.id);
    this.data = [
      {
        title: '用户ID',
        content: `${this.user.id}`,
        text: `${this.user.id}`,
        isEditing: false
      }, {
        title: '用户名',
        content: `${this.user.username}`,
        text: `${this.user.username}`,
        isEditing: false
      }, {
        title: '密码',
        content: `${this.user.password}`,
        text: `${this.user.password}`,
        isEditing: false
      }
    ]
  }

  edit(item: any) {
    item.isEditing = true;
  }

  confirm(item: any) {
    if (item.text) {
      this._message.success('修改成功！');
      item.isEditing = false;
      item.content = item.text
    } else {
      this._message.error('修改内容不能为空!');
    }
  }

  cancel(item: any) {
    item.isEditing = false;
    item.text = item.content
  }

  deleteAddr(addrId: string) {
    this.addressList = this.addressList.filter(item => item.addressId !== addrId);
  }

}
