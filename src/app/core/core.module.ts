import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { RegisterModalComponent } from './modal/register-modal/register-modal.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { BackTopComponent } from './back-top/back-top.component';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddrModalComponent } from './modal/addr-modal/addr-modal.component';
import { NewAddressButtonComponent } from './new-address-button/new-address-button.component';
import { OrderTableComponent } from './order-table/order-table.component';
import {OrderDetailComponent} from './modal/order-detail/order-detail.component';
import { SearchButtonComponent } from './search-button/search-button.component';

@NgModule({
  declarations: [LoginModalComponent, ProductItemComponent, RegisterModalComponent, DetailPageComponent, BackTopComponent, AddressItemComponent, AddrModalComponent, NewAddressButtonComponent, OrderTableComponent, OrderDetailComponent, SearchButtonComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginModalComponent,
    ProductItemComponent,
    RegisterModalComponent,
    DetailPageComponent,
    BackTopComponent,
    AddressItemComponent,
    AddrModalComponent,
    NewAddressButtonComponent,
    OrderTableComponent,
    OrderDetailComponent,
    SearchButtonComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule { }
