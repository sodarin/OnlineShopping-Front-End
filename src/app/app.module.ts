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
import {CellphoneService} from './service/cellphone/cellphone.service';
import {ComputerService} from './service/computer/computer.service';
import {AddressService} from './service/address/address.service';
import {AddrModalComponent} from './core/modal/addr-modal/addr-modal.component';


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
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    LoginService,
    CellphoneService,
    ComputerService,
    AddressService
  ],
  entryComponents: [
    LoginModalComponent,
    RegisterModalComponent,
    AddrModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
