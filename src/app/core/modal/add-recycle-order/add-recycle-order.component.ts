import { Component, OnInit } from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-add-recycle-order',
  templateUrl: './add-recycle-order.component.html',
  styleUrls: ['./add-recycle-order.component.less']
})
export class AddRecycleOrderComponent implements OnInit {

  current = 0;

  constructor(
    private _modal: NzModalRef
  ) { }

  ngOnInit() {
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  submit() {
    this._modal.destroy()
  }

  cancel() {
    this._modal.destroy()
  }

}
