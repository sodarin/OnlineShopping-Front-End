import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';

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
    private _message: NzMessageService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }
  
  register(){
    if (this.registerForm.value.name == '' || this.registerForm.value.password == '' || this.registerForm.value.confirmPassword == '' || this.registerForm.value.email == ''){
      this._message.error('内容不能为空');
      return false
    } else if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this._message.error('两次输入密码不一致');
      return false
    } else {
      this._modal.destroy()
    }
  }

  closeDialog() {
    this._modal.destroy();
  }
  
  

}
