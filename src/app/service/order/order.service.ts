import {Injectable} from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderItem} from '../../model/orderItem.model';
import {StatusEnum} from '../../model/statusEnum.model';
import {ItemType} from '../../model/item-type.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderItemParam} from '../../model/orderItemParam.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }

  getOrderList(userId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString());
    return this._http.get(`/api/order/list`, {params: params});
  }

  updateOrderStatus(orderId: number, status: StatusEnum): Observable<any> {
    return this._http.put(`/api/order/update/${orderId}`, {
      status: status
    })
  }

  createNewOrder(userId: number, addressId: number, orderItemParams: OrderItemParam[]): Observable<any> {
    return this._http.post(`/api/order/create`, {
      userId: userId,
      addressId: addressId,
      orderItemParams: orderItemParams
    })
  }

  getOrderById(orderId: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString());
    return this._http.get(`/api/order/detail/${orderId}`, {params: params})
  }
}
