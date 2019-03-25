import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from '../../model/address.model';
import {NzModalService} from 'ng-zorro-antd';
import {AddrModalComponent} from '../modal/addr-modal/addr-modal.component';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.less']
})
export class AddressItemComponent implements OnInit {

  @Input()
  item: Address;

  @Output()
  deleteEvent = new EventEmitter<string>();

  constructor(
    private _modal: NzModalService
  ) { }

  ngOnInit() {
  }

  edit(item: any): void {
    const modal = this._modal.create({
      nzTitle: '修改地址',
      nzContent: AddrModalComponent,
      nzOkText: '确认修改',
      nzOnOk: instance => instance.modifyAddr(),
      nzCancelText: '取消',
      nzOnCancel: instance => instance.closeDialog()
    })
  }

  delete(addrId: string) {
    this.deleteEvent.emit(addrId);
  }

}
