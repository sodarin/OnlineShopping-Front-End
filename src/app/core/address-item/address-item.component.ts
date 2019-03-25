import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from '../../model/address.model';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
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
    private _modal: NzModalService,
    private _message: NzMessageService
  ) { }

  ngOnInit() {
  }

  edit(item: any): void {
    const modal = this._modal.create({
      nzTitle: '修改地址',
      nzContent: AddrModalComponent,
      nzComponentParams: {
        item: item
      },
      nzOkText: '确认修改',
      nzOnOk: instance => instance.submit(),
      nzCancelText: '取消',
      nzOnCancel: instance => instance.closeDialog()
    });
    modal.afterClose.subscribe(result => {
      if (result) {
       this.item = result;
       this._message.success('修改地址成功');
      }
    })
  }

  delete(addrId: string) {
    this.deleteEvent.emit(addrId);
  }

}
