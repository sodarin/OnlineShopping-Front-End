import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecycleComponent } from './recycle.component';
import {RecycleRoutingModule} from './recycle-routing.module';

@NgModule({
  declarations: [RecycleComponent],
  imports: [
    CommonModule,
    RecycleRoutingModule
  ]
})
export class RecycleModule { }
