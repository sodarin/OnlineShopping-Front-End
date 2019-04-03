import { Injectable } from '@angular/core';
import {PassageComment} from '../../model/comment.model';
import {Passage} from '../../model/passage.model';

@Injectable({
  providedIn: 'root'
})
export class PassageService {

  commentList: PassageComment[] = [
    new PassageComment('1', 'sodarin', new Date(), '我觉得文章说得很不错', '1'),
    new PassageComment('2', 'zzzz', new Date(), '我也觉得文章说得很不错', '1', '1'),
    new PassageComment('3', 'ccc', new Date(), '我也觉得文章说得很不错', '1', '2'),
    new PassageComment('4', 'aaa', new Date(), '我觉得文章说得一般', '1'),
    new PassageComment('5', 'qwer', new Date(), '我倒是觉得文章说得很不错', '1', '4'),
    new PassageComment('6', 'asdf', new Date(), '我觉得文章说得很不错', '1'),
    new PassageComment('7', 'wer', new Date(), '我觉得文章说得很不错', '1'),
    new PassageComment('8', 'zzasdfzz', new Date(), '我觉得文章说得很不错', '1'),
  ];

  passage = new Passage('1', '1', 'sodarin', new Date(),
    '如何挑选笔记本电脑',
    '随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写随便写写。',
    this.commentList);

  passageList: Passage[] = [this.passage, this.passage, this.passage, this.passage, this.passage, this.passage, this.passage, this.passage, this.passage, this.passage];

  constructor() { }

  getPassageList() {
    return this.passageList
  }

  getReplyObjectByCriticId(id: string): PassageComment {
    return this.commentList.find(item => item.criticId == id);
  }

  getCommentByCrititcId(id: string): PassageComment {
    return this.commentList.find(item => item.criticId == id)
  }
}
