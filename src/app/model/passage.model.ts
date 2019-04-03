import {PassageComment} from './comment.model';

export class Passage {
  constructor(
    public passageId: string,
    public authorId: string,
    public authorName: string,
    public publishTime: Date,
    public title: string,
    public content: string,
    public commentList: PassageComment[]
  ) {}
}
