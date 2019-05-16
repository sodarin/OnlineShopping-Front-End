export class PassageComment {
  constructor(
    public commentId: number,
    public username: string,
    public userId: number,
    public commentTime: Date,
    public content: string,
    public passageId: number,
    public replyCommentId?: number
  ) {}
}
