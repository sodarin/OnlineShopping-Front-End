import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Order} from '../../../model/order.model';
import {Router} from '@angular/router';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {AddressService} from '../../../service/address/address.service';
import {Address} from '../../../model/address.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent implements OnInit {

  @Input()
  item: any;

  address: Address;

  itemList: any[] = [];

  price: number = 0;

  constructor(
    private router: Router,
    private _modal: NzModalRef,
    private _message: NzMessageService,
    private addressService$: AddressService
  ) { }

  ngOnInit() {
    this.addressService$.getAddressByAddressId(this.item.addressId).subscribe( result => {
      this.address = result;
    }, error1 => this._message.error(error1.error));
    this.item.orderItems.forEach( item => {
      this.itemList.push({
        id: item.itemId,
        name: item.name,
        img: item.imgUrl,
        num: item.number,
        totalPrice: item.price * item.number
      })
    });
    this.itemList.forEach(item => this.price += item.totalPrice)
  }


  turnToDetailPage(itemData: any) {
    this._modal.destroy();
    this.router.navigateByUrl(`/detail/${itemData.id}`)
  }

}
