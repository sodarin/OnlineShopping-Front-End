import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {LoginService} from '../../../service/login/login.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.less']
})
export class RegisterModalComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _modal: NzModalRef,
    private _message: NzMessageService,
    private loginService$: LoginService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  
  register(){
    let flag = false;
    if (this.registerForm.value.name == '' || this.registerForm.value.password == '' || this.registerForm.value.confirmPassword == '' || this.registerForm.value.email == ''){
      this._message.error('内容不能为空');
      flag = false;
    } else if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this._message.error('两次输入密码不一致');
      flag = false;
    } else if (this.registerForm.get('email').hasError('email')) {
      this._message.error('邮箱格式不正确');
      flag = false;
    } else {
      this.loginService$.register(this.registerForm.value.name, this.registerForm.value.password, this.registerForm.value.email).subscribe( result => {
        this._message.success('注册成功!');
        flag = true;
        this._modal.destroy()
      }, error => {
        this._message.error(error.error);
        flag = false;
      })
    }
    return flag;
  }

  closeDialog() {
    this._modal.destroy();
  }
  
  

}
