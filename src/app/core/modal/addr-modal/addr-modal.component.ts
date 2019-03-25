import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {Address} from '../../../model/address.model';

@Component({
  selector: 'app-addr-modal',
  templateUrl: './addr-modal.component.html',
  styleUrls: ['./addr-modal.component.less']
})
export class AddrModalComponent implements OnInit {

  @Input()
  item: Address;

  result: Address;

  addrEditForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modal:NzModalRef,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.addrEditForm = this.fb.group({
      name: [this.item.client_name, [Validators.required]],
      phone_no: [this.item.phone_no, [Validators.required]],
      postcode: [this.item.postcode],
      addr: [this.item.detailAddr, [Validators.required]]
    })
  }

  submit() {
    if (this.addrEditForm.value.name == '' || this.addrEditForm.value.phone_no == '' || this.addrEditForm.value.addr == '') {
      this._message.error('内容不能为空');
      return false
    }else {
      this.result = new Address(this.item.clientId, this.item.addressId, this.addrEditForm.value.name, this.addrEditForm.value.postcode, this.addrEditForm.value.phone_no, this.addrEditForm.value.addr);
      this._modal.destroy(this.result)
    }
  }

  closeDialog() {
    this._modal.destroy(this.result)
  }

}
