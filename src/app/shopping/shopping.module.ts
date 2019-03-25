import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from './computer/computer.component';
import { CellphoneComponent } from './cellphone/cellphone.component';
import { MouseComponent } from './mouse/mouse.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ComputerComponent, CellphoneComponent, MouseComponent, KeyboardComponent, HeadphonesComponent, CartComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
