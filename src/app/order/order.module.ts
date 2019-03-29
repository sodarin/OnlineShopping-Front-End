import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import {OrderRoutingModule} from './order-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgZorroAntdModule,
    CoreModule
  ]
})
export class OrderModule { }
