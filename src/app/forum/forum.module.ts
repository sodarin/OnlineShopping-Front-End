import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import {ForumRoutingModule} from './forum-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { PassegeComponent } from './passege/passege.component';
import {CoreModule} from '../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [ForumComponent, PassegeComponent],
  imports: [
    CommonModule,
    ForumRoutingModule,
    NgZorroAntdModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class ForumModule { }
