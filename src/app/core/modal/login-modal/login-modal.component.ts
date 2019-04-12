import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../service/login/login.service';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.less']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService$: LoginService,
    private _modal: NzModalRef,
    private fb: FormBuilder,
    private _message: NzMessageService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  isSuccessLogin() {
    return this.login()
  }

  login(): boolean {
    let flag = false;
    if (this.loginForm.value.name == '' || this.loginForm.value.password == ''){
      this._message.error('内容不能为空');
      flag = false
    } else {
      this.loginService$.loginService(this.loginForm.value.name, this.loginForm.value.password).subscribe(
        result => {
          this.loginService$.user = result;
          this._message.success('登陆成功');
          this.loginService$.loginStatus.next(true);
          this._modal.destroy()
        },
        error => {
          this._message.error(error.error);
          flag = false
        }
      );
    }
    return flag
  }

  closeDialog() {
    this._modal.destroy();
  }

}
