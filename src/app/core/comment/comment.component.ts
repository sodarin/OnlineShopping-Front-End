import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { distanceInWords } from 'date-fns';
import {PassageComment} from '../../model/comment.model';
import {PassageService} from '../../service/passage/passage.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: PassageComment;
  replyObject;

  @Output()
  repleyObjectEvent = new EventEmitter<string>();

  time = distanceInWords(new Date(), new Date());

  constructor(
    private passageService$: PassageService
  ) { }

  ngOnInit() {
    if (this.comment.reply_criticId)
      this.replyObject = this.passageService$.getReplyObjectByCriticId(this.comment.reply_criticId)
  }

  emitReplyObject(id: string) {
    this.repleyObjectEvent.emit(id)
  }

}
