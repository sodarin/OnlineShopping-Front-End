import { Injectable } from '@angular/core';
import {PassageComment} from '../../model/comment.model';
import {Passage} from '../../model/passage.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassageService {


  constructor(private _http: HttpClient) { }

  getPassageList(targetPage: number, pageSize: number): Observable<any> {
    const param = new HttpParams()
      .set("targetPage", targetPage.toString())
      .set("pageSize", pageSize.toString());
    return this._http.get(`/api/passage/list`, {params: param});
  }

  createPassage(userId: number, title: string, content: string): Observable<any> {
    return this._http.post(`/api/passage/create`, {
      userId: userId,
      title: title,
      content: content
    })
  }

  getPassageById(passageId: number): Observable<Passage> {
    return this._http.get<Passage>(`/api/passage/detail/${passageId}`)
  }

  getCommentListByPassageId(targetPage: number, pageSize: number, passageId: number): Observable<any> {
    const param = new HttpParams()
      .set('targetPage', targetPage.toString())
      .set('pageSize', pageSize.toString())
      .set('passageId', passageId.toString());
    return this._http.get(`/api/comment/list`, {params: param})
  }

  getCommentDetail(commentId: number): Observable<PassageComment> {
    return this._http.get<PassageComment>(`/api/comment/detail/${commentId}`)
  }

  createComment(passageId: number, userId: number, content: String, replyCommentId: number): Observable<any> {
    return this._http.post(`/api/comment/create`, {
      passageId: passageId,
      userId: userId,
      content: content,
      replyCommentId: replyCommentId
    })
  }
}
