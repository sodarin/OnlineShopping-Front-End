import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ComputerComponent } from './computer/computer.component';
import { CellphoneComponent } from './cellphone/cellphone.component';
import { MouseComponent } from './mouse/mouse.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import { CartComponent } from './cart/cart.component';
import {CoreModule} from '../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ComputerComponent, CellphoneComponent, MouseComponent, KeyboardComponent, HeadphonesComponent, CartComponent],
  imports: [
    CommonModule,
    CoreModule,
    ShoppingRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class ShoppingModule { }
