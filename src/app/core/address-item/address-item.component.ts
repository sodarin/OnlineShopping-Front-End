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
  @Input()
  activeClass: boolean;

  @Output()
  deleteEvent = new EventEmitter<number>();
  @Output()
  modifyItem = new EventEmitter<Address>();



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
       this.modifyItem.emit(this.item);
      }
    })
  }

  delete(addrId: number) {
    this.deleteEvent.emit(addrId);
  }

}
