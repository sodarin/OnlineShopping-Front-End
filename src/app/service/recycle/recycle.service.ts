import {Injectable} from '@angular/core';
import {RecycleStatus} from '../../model/recycleStatus';
import {RecycleItemDetail} from '../../model/recycleItemDetail.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecycleComponentStatus} from '../../model/RecycleComponentStatus';
import {RecycleVitalProblem} from '../../model/RecycleVitalProblem';
import {RecycleDetailParam} from '../../model/RecycleDetailParam';
import {RecycleVitalProblemParam} from '../../model/RecycleVitalProblemParam';
import {RecycleComponentStatusParam} from '../../model/RecycleComponentStatusParam';

@Injectable({
  providedIn: 'root'
})
export class RecycleService {


  constructor(private _http: HttpClient) { }

  getRecycleOrderList(userId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId.toString());
    return this._http.get(`/api/recycle/list`, {params: params});
  }

  updateRecycleStatus(recycleOrderId: number, status: RecycleStatus): Observable<any> {
    return this._http.put(`/api/recycle/update/${recycleOrderId}`, {
      status: status
    })
  }

  getRecycleDetail(recycleOrderId: number): Observable<RecycleItemDetail> {
    return this._http.get<RecycleItemDetail>(`/api/recycle/detail/${recycleOrderId}`)
  }

  getComponentStatus(recycleOrderId: number): Observable<RecycleComponentStatus[]> {
    return this._http.get<RecycleComponentStatus[]>(`/api/recycle/component/detail/${recycleOrderId}`)
  }

  getVitalProblem(recycleOrderId: number): Observable<RecycleVitalProblem[]> {
    return this._http.get<RecycleVitalProblem[]>(`/api/recycle/problem/detail/${recycleOrderId}`);
  }

  createNewRecycleOrder(userId: number, orderId: number, itemId: number, recyclePrice: number, recycleDetailParam: RecycleDetailParam, recycleVitalProblemList: RecycleVitalProblemParam[], recycleComponentStatusList: RecycleComponentStatusParam[]): Observable<any> {
    return this._http.post(`/api/recycle/create`, {
      userId: userId,
      orderId: orderId,
      itemId: itemId,
      recyclePrice: recyclePrice,
      recycleDetailParam: recycleDetailParam,
      recycleVitalProblemParams: recycleVitalProblemList,
      recycleComponentStatusParams: recycleComponentStatusList
    })
  }


}
