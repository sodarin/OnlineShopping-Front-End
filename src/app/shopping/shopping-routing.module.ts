import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComputerComponent} from './computer/computer.component';
import {CellphoneComponent} from './cellphone/cellphone.component';
import {HeadphonesComponent} from './headphones/headphones.component';
import {KeyboardComponent} from './keyboard/keyboard.component';
import {MouseComponent} from './mouse/mouse.component';
import {CartComponent} from './cart/cart.component';
import {DetailPageComponent} from '../core/detail-page/detail-page.component';

const routes: Routes = [
  {path: 'shopping/computer', component: ComputerComponent},
  {path: 'shopping/cellphone', component: CellphoneComponent},
  {path: 'shopping/headphones', component: HeadphonesComponent},
  {path: 'shopping/keyboard', component: KeyboardComponent},
  {path: 'shopping/mouse', component: MouseComponent},
  {path: 'shopping/cart', component: CartComponent},
  {path: 'detail/:id', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
