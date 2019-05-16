import { Injectable } from '@angular/core';
import {ShoppingCartItem} from '../../model/shopping-cart-item.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  constructor(private _http: HttpClient) { }

  getShoppingCartItemList(targetPage: number, pageSize: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('userId', userId.toString());
    return this._http.get(`/api/shoppingCart/list`, {params: params});
  }

  updateShoppingCartItemNumber(shoppingCartItemId: number, newNumber: number): Observable<any> {
    return this._http.put(`/api/shoppingCart/update/${shoppingCartItemId}`, {
      number: newNumber
    })
  }

  deleteShoppingCartItem(shoppingCartItemId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type' : 'application/x-www-form-urlencoded'
      })
    };
    return this._http.delete(`/api/shoppingCart/delete/${shoppingCartItemId}`, httpOptions);
  }

  createShoppingCartItem(userId: number, itemId: number, totalNumber: number): Observable<any> {
    return this._http.post(`/api/shoppingCart/create`, {
      userId: userId,
      itemId: itemId,
      number: totalNumber
    })
  }

  getShoppingCartItemById(shoppingCartItemId: number): Observable<ShoppingCartItem> {
    return this._http.get<ShoppingCartItem>(`/api/shoppingCart/detail/${shoppingCartItemId}`);
  }
}
