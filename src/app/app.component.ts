import {Component, TemplateRef, ViewChild} from '@angular/core';
import {LoginService} from './service/login/login.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {LoginModalComponent} from './core/modal/login-modal/login-modal.component';
import {Router} from '@angular/router';
import {RegisterModalComponent} from './core/modal/register-modal/register-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'final-project';
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  isLogin: boolean;

  constructor(
    private loginService$: LoginService,
    private _modalService: NzModalService,
    private _modalMessage: NzMessageService,
    private router: Router
    ) {
    this.loginService$.loginStatus.subscribe( value => this.isLogin = value );
  }

  ngOnInit() {

  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  login():void {
    const modal = this._modalService.create({
      nzTitle: '登录',
      nzContent: LoginModalComponent,
      nzOkText: '确认',
      nzOnOk: instance => instance.isSuccessLogin(),
      nzCancelText: '取消',
      nzOnCancel: instance => instance.closeDialog(),
      nzOkLoading: false
    })
  }

  logout(): void {
    this.loginService$.logoutService();
    this.router.navigateByUrl('')
  }

  register(): void {
    const modal = this._modalService.create({
      nzTitle: '注册',
      nzContent: RegisterModalComponent,
      nzOkText: '确认',
      nzOnOk: instance => instance.register(),
      nzCancelText: '取消',
      nzOnCancel: instance => instance.closeDialog(),
      nzOkLoading: false
    })
  }

  navigateToNewPage(url: string): void {
    this.router.navigateByUrl(url)
  }
}
