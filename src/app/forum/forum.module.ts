import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import {ForumRoutingModule} from './forum-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { PassegeComponent } from './passege/passege.component';

@NgModule({
  declarations: [ForumComponent, PassegeComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    NgZorroAntdModule
  ]
})
export class ForumModule { }
