import { Component, OnInit } from '@angular/core';
import {PassageService} from '../service/passage/passage.service';
import {Passage} from '../model/passage.model';
import {NzMessageService} from 'ng-zorro-antd';
import {LoginService} from '../service/login/login.service';
import {PassageComment} from '../model/comment.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {

  pageIndex = 1;
  total;
  totalPage;
  loading = true;
  inputTitle: string;

  commentLoading = true;
  commentPageIndex = 1;
  commentTotal;
  commentTotalPage;

  commentList: PassageComment[] = [];


  passageList: Passage[] = [];
  detailPassage: Passage;
  viewPassageVisible = false;
  createPassageVisible = false;

  editorContent: any;

  replyObject: PassageComment;
  commentPrefix: string;
  inputComment: string;
  inputContent: string = '';
  prefixLength: number = 0;
  constructor(
    private passageService$: PassageService,
    private _message: NzMessageService,
    private loginService$: LoginService
  ) { }

  ngOnInit() {
    this.searchData();
  }

  searchData(pageIndex: number = this.pageIndex) {
    this.loading = true;
    this.passageService$.getPassageList(pageIndex, 8).subscribe(result => {
      this.loading = false;
      this.total = result.total;
      this.totalPage = Math.ceil(this.total / this.pageIndex);
      this.pageIndex = pageIndex;
      this.passageList = result.list;
    }, error1 => this._message.error(error1.error))

  }

  open() {
    if (!this.loginService$.user)
      this._message.warning("请先登录！");
    else
      this.createPassageVisible = true
  }

  submit() {
    this.passageService$.createPassage(this.loginService$.user.userId, this.inputTitle, this.editorContent).subscribe( result => {
      this._message.success("编辑成功！");
      this.searchData();
      this.createPassageVisible = false;
      this.inputTitle = '';
      this.editorContent = '';
    }, error1 => this._message.error(error1.error));
  }

  closeCreatePassage() {
    this.createPassageVisible = false;
  }

  viewFullPassage(passageId: number) {
    this.commentList = [];
    this.passageService$.getPassageById(passageId).subscribe(result => {
      this.detailPassage = result;
      this.viewPassageVisible = true;
      document.getElementById('title').innerHTML = this.detailPassage.title;
      document.getElementById('content').innerHTML = this.detailPassage.content;
      this.searchCommentList(this.detailPassage.passageId);
    }, error1 => this._message.error(error1.error));
  }

  searchCommentList(passageId: number, pageIndex: number = this.commentPageIndex) {
    this.commentLoading = true;
    this.passageService$.getCommentListByPassageId(pageIndex, 8, passageId).subscribe( result => {
      this.commentLoading = false;
      this.commentTotal = result.total;
      this.commentTotalPage = Math.ceil(this.commentTotal / this.commentPageIndex);
      this.commentPageIndex = pageIndex;
      this.commentList = result.list;
    }, error1 => this._message.error(error1.error))
  }

  closeViewPassage() {
    this.viewPassageVisible = false;
    this.inputComment = '';
    this.inputContent = '';
    this.commentPrefix = '';
    this.replyObject = null;
  }

  confirmReplyObject(event: any) {
    this.passageService$.getCommentDetail(event).subscribe( result => {
      this.replyObject = result;
      this.commentPrefix = `回复${this.replyObject.username}：`;
      this.prefixLength = this.commentPrefix.length;
      this.inputContent = this.commentPrefix;
    })
  }

  detectContentChange() {
    if (this.inputContent == '' || this.inputContent.length < this.prefixLength) {
      this.commentPrefix = '';
      this.prefixLength = 0;
      this.inputContent = '';
      this.replyObject = null;
    }
  }

  submitComment() {
    if (!this.loginService$.user)
      this._message.warning("请先登录！");
    else {
      if (this.commentPrefix.length > 0)
        this.inputComment = this.inputContent.split(this.commentPrefix)[1];
      else
        this.inputComment = this.inputContent;
      let replyObjectId = this.replyObject == null? null: this.replyObject.commentId;
      this.passageService$.createComment(this.detailPassage.passageId, this.loginService$.user.userId, this.inputComment,replyObjectId).subscribe( result => {
        this._message.success('评论成功！');
        this.searchCommentList(this.detailPassage.passageId);
        this.commentPrefix = '';
        this.prefixLength = 0;
        this.inputContent = '';
        this.replyObject = null;
      }, error1 => this._message.error(error1.error))
    }

  }

}
