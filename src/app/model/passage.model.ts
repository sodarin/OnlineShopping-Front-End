import {PassageComment} from './comment.model';

export class Passage {
  constructor(
    public passageId: number,
    public userId: number,
    public username: string,
    public publishTime: Date,
    public title: string,
    public content: string,
  ) {}
}
