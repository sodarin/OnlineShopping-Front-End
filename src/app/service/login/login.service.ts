import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Client} from '../../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Client = new Client('1001', '123456', 'sodarin');

  loginStatus: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  loginService(): void {
    this.loginStatus.next(true);
  }

  logoutService(): void {
    this.loginStatus.next(false);
  }

  getUserById(id: string = '1001'): Client {
    return this.user
  }
}
