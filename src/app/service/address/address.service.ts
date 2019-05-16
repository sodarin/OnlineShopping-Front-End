import { Injectable } from '@angular/core';
import {Address} from '../../model/address.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private _http: HttpClient) { }

  getAddressByAddressId(addressId: number): Observable<Address> {
    return this._http.get<Address>(`/api/address/detail/${addressId}`);
  }

  getAddressListByUserId(userId: number): Observable<any> {
    return this._http.get(`/api/address/${userId}`);
  }

  createAddress(address: Address): Observable<any> {
    return this._http.post(`/api/address/${address.userId}`, {
      userId: address.userId,
      recipientName: address.recipientName,
      phone: address.phone,
      postcode: address.postcode,
      detailAddress: address.detailAddress
    })
  }

  deleteAddress(userId: number, addressId: number): Observable<any> {
    return this._http.delete(`/api/address/${userId}/${addressId}`);
  }

  updateAddress(address: Address): Observable<any> {
    return this._http.put(`/api/address/${address.userId}/${address.addressId}`, {
      addressId: address.addressId,
      userId: address.userId,
      recipientName: address.recipientName,
      phone: address.phone,
      postcode: address.postcode,
      detailAddress: address.detailAddress
    })
  }


}
