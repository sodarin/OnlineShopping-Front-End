import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecycleComponent } from './recycle.component';
import {RecycleRoutingModule} from './recycle-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [RecycleComponent],
  imports: [
    CommonModule,
    RecycleRoutingModule,
    NgZorroAntdModule,
    CoreModule
  ]
})
export class RecycleModule { }
