import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) { }

  getDetailById(id: string): Observable<Item> {
    return this._http.get<Item>(`/api/item/detail/${id}`)
  }


  getLatestComputerList(n: number = 4): Observable<Item[]> {
    return this._http.get<Item[]>(`/api/item/COMPUTER/latest?n=${n}`)
  }


  getLatestCellphoneList(n: number = 4): Observable<Item[]> {
    return this._http.get<Item[]>(`/api/item/CELLPHONE/latest?n=${n}`)
  }

  getLatestEarphoneList(n: number = 4): Observable<Item[]> {
    return this._http.get<Item[]>(`/api/item/EARPHONE/latest?n=${n}`)
  }

  getLatestKeyboardList(n: number = 4): Observable<Item[]> {
    return this._http.get<Item[]>(`/api/item/KEYBOARD/latest?n=${n}`)
  }

  getLatestMouseList(n: number = 4): Observable<Item[]> {
    return this._http.get<Item[]>(`/api/item/MOUSE/latest?n=${n}`)
  }


  getComputerList(targetPage: number,
          pageSize: number,
          nameContaining: string = null,
          priceMin: string = null,
          priceMax: string = null): Observable<any> {
    const params = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('nameContaining', nameContaining ? nameContaining: '')
      .set('priceMin', priceMin ? priceMin.toString(): '')
      .set('priceMax', priceMax ? priceMax.toString(): '');
    return this._http.get(`/api/item/COMPUTER/list`, {params: params})
  }

  getCellphoneList(targetPage: number,
          pageSize: number,
          nameContaining: string = null,
          priceMin: string = null,
          priceMax: string = null): Observable<any> {
    const params = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('nameContaining', nameContaining ? nameContaining: '')
      .set('priceMin', priceMin ? priceMin.toString(): '')
      .set('priceMax', priceMax ? priceMax.toString(): '');
    return this._http.get(`/api/item/CELLPHONE/list`, {params: params})
  }

  getEarphoneList(targetPage: number,
          pageSize: number,
          nameContaining: string = null,
          priceMin: string = null,
          priceMax: string = null): Observable<any> {
    const params = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('nameContaining', nameContaining ? nameContaining: '')
      .set('priceMin', priceMin ? priceMin.toString(): '')
      .set('priceMax', priceMax ? priceMax.toString(): '');
    return this._http.get(`/api/item/EARPHONE/list`, {params: params})
  }

  getKeyboardList(targetPage: number,
          pageSize: number,
          nameContaining: string = null,
          priceMin: string = null,
          priceMax: string = null): Observable<any> {
    const params = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('nameContaining', nameContaining ? nameContaining: '')
      .set('priceMin', priceMin ? priceMin.toString(): '')
      .set('priceMax', priceMax ? priceMax.toString(): '');
    return this._http.get(`/api/item/KEYBOARD/list`, {params: params})
  }

  getMouseList(targetPage: number,
          pageSize: number,
          nameContaining: string = null,
          priceMin: string = null,
          priceMax: string = null): Observable<any> {
    const params = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('nameContaining', nameContaining ? nameContaining: '')
      .set('priceMin', priceMin ? priceMin.toString(): '')
      .set('priceMax', priceMax ? priceMax.toString(): '');
    return this._http.get(`/api/item/MOUSE/list`, {params: params})
  }
}
