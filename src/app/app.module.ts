import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {LoginService} from './service/login/login.service';
import {LoginModalComponent} from './core/modal/login-modal/login-modal.component';
import {ForumModule} from './forum/forum.module';
import {OrderModule} from './order/order.module';
import {RecycleModule} from './recycle/recycle.module';
import {ShoppingModule} from './shopping/shopping.module';
import {UserModule} from './user/user.module';
import {RegisterModalComponent} from './core/modal/register-modal/register-modal.component';
import {AddressService} from './service/address/address.service';
import {AddrModalComponent} from './core/modal/addr-modal/addr-modal.component';
import {ShoppingCartService} from './service/shoppingCart/shopping-cart.service';
import {OrderDetailComponent} from './core/modal/order-detail/order-detail.component';
import {RecycleService} from './service/recycle/recycle.service';
import {AddRecycleOrderComponent} from './core/modal/add-recycle-order/add-recycle-order.component';
import {ShowRecycleDetailComponent} from './core/modal/show-recycle-detail/show-recycle-detail.component';
import { QuillModule } from 'ngx-quill'
import {ItemService} from './service/item/item.service';


registerLocaleData(en);

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    HomeModule,
    ForumModule,
    OrderModule,
    RecycleModule,
    ShoppingModule,
    UserModule,
    NgZorroAntdModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QuillModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    LoginService,
    AddressService,
    ShoppingCartService,
    ItemService,
    RecycleService
  ],
  entryComponents: [
    LoginModalComponent,
    RegisterModalComponent,
    AddrModalComponent,
    OrderDetailComponent,
    AddRecycleOrderComponent,
    ShowRecycleDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
