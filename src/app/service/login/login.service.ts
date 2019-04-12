import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Client} from '../../model/client.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Client;

  loginStatus: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) { }

  loginService(username: string, password: string): Observable<Client> {
    return this._http.post<Client>('api/user/login', {
      username: username,
      password: password
    })
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this._http.post<any>('api/user/register', {
      username: username,
      password: password,
      email: email
    })
  }

  logoutService(): void {
    this.user = null;
    this.loginStatus.next(false);
  }

  getUserById(): Observable<Client> {
    return this._http.get<Client>( `/api/user/${this.user.userId}`)
  }

  updateUserInfo(client: Client): Observable<any> {
    return this._http.put(`/api/user/${client.userId}`, {
      username: client.username,
      password: client.password,
      email: client.email
    })
  }
}
