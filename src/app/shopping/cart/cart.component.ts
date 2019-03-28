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

  selectAddrId: string;
  selectResult = {name: '', addr: ''};

  constructor(
    private loginService$: LoginService,
    private addressService$: AddressService
  ) { }

  ngOnInit() {
    this.user = this.loginService$.getUserById();
    this.addressList = this.addressService$.getAddressListByClientId(this.user.id);
    this.selectAddrId = this.addressList[0].addressId;
    this.changeSelectResult()
  }

  detectAddrDelete(addrId: string) {
    this.addressList = this.addressList.filter(item => item.addressId !== addrId);
    if (addrId == this.selectAddrId) {
      this.selectAddrId = this.addressList[0].addressId;
      this.changeSelectResult()
    }
  }

  detectAddrModify(addr: Address) {
    this.addressList.forEach((item, index) => {
      if (item.addressId == addr.addressId){
        this.addressList[index] = addr;
      }
    });
    this.changeSelectResult()
  }

  addNewAddr(addr: Address) {
    this.addressList.push(addr)
  }

  changeSelectResult() {
    let addr = this.addressList.filter(item => item.addressId === this.selectAddrId)[0];
    this.selectResult.name = addr.client_name;
    this.selectResult.addr = addr.detailAddr
  }

  detectSelectChange() {
    this.changeSelectResult()
  }

}
