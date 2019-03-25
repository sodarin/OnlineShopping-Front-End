import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import {CoreModule} from '../core/core.module';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {LoginService} from '../service/login/login.service';
import {LoginModalComponent} from '../core/modal/login-modal/login-modal.component';
import {CellphoneService} from '../service/cellphone/cellphone.service';
import {ComputerService} from '../service/computer/computer.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule,
    CoreModule,
    HomeRoutingModule
  ],
  entryComponents: [
    LoginModalComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
})
export class HomeModule { }
