import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login/login.service';
import {Client} from '../model/client.model';
import {NzMessageService} from 'ng-zorro-antd';
import {Address} from '../model/address.model';
import {AddressService} from '../service/address/address.service';
import {Router} from '@angular/router';

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
    private _message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.loginService$.user == null) {
      this.router.navigateByUrl('');
      this._message.warning("请先登录")
    } else {
      this.displayUserInfo()
    }
  }

  private displayUserInfo() {
    this.loginService$.getUserById().subscribe( result => {
      this.user = result;
      this.data = [
        {
          title: '用户名',
          content: `${this.user.username}`,
          text: `${this.user.username}`,
          bindingData: "username",
          isEditing: false
        }, {
          title: '密码',
          content: `${this.user.password}`,
          text: `${this.user.password}`,
          bindingData: "password",
          isEditing: false
        }, {
          title: '邮箱',
          content: `${this.user.email}`,
          text: `${this.user.email}`,
          bindingData: "email",
          isEditing: false
        }
      ];
      this.getAddressList();
    }, error => {
      this._message.error(error.error)
    });
  }

  private getAddressList() {
    this.addressService$.getAddressListByUserId(this.user.userId).subscribe( result => {
      this.addressList = result;
    }, error1 => this._message.error(error1.error))
  }

  edit(item: any) {
    item.isEditing = true;
  }

  confirm(item: any) {
    if (item.text) {
      if (item.bindingData == 'username')
        this.user.username = item.text;
      else if (item.bindingData == 'password')
        this.user.password = item.text;
      else
        this.user.email = item.text;
      this.loginService$.updateUserInfo(this.user).subscribe( result => {
        this._message.success('修改成功！');
        item.isEditing = false;
        item.content = item.text
      }, error => this._message.error(error.error))
    } else {
      this._message.error('修改内容不能为空!');
    }
  }

  cancel(item: any) {
    item.isEditing = false;
    item.text = item.content
  }

  deleteAddr(addrId: number) {
    this.addressService$.deleteAddress(this.user.userId, addrId).subscribe( result => {
      this._message.success('删除地址成功!');
      this.getAddressList()
    }, error1 => this._message.error(error1.error))
  }

  addNewAddr(addr: Address) {
    this.addressService$.createAddress(addr).subscribe( result => {
      this._message.success("添加地址成功!");
      this.getAddressList()
    }, error1 => this._message.error(error1.error))
  }

  modifyAddr(addr: Address) {
    this.addressService$.updateAddress(addr).subscribe( result => {
      this._message.success("修改地址成功!");
      this.getAddressList()
    }, error1 => this._message.error(error1.error))
  }

}
