import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login/login.service';
import {AddressService} from '../../service/address/address.service';
import {Client} from '../../model/client.model';
import {Address} from '../../model/address.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  user: Client;
  addressList: Address[];

  constructor(
    private loginService$: LoginService,
    private addressService$: AddressService
  ) { }

  ngOnInit() {
    this.user = this.loginService$.getUserById();
    this.addressList = this.addressService$.getAddressListByClientId(this.user.id);
  }

}
