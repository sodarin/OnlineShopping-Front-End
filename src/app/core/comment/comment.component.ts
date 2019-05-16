import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { distanceInWords } from 'date-fns';
import {PassageComment} from '../../model/comment.model';
import {PassageService} from '../../service/passage/passage.service';
import {Client} from '../../model/client.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: PassageComment;
  replyObject: PassageComment;


  @Output()
  repleyObjectEvent = new EventEmitter<number>();


  constructor(
    private passageService$: PassageService,
  ) { }

  ngOnInit() {
    if (this.comment.replyCommentId)
      this.passageService$.getCommentDetail(this.comment.replyCommentId).subscribe( result => {
        this.replyObject = result;
      })
  }

  emitReplyObject(id: number) {
    this.repleyObjectEvent.emit(id)
  }

}
