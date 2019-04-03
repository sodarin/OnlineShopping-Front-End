export class PassageComment {
  constructor(
    public criticId: string,
    public criticName: string,
    public criticTime: Date,
    public content: string,
    public passageId: string,
    public reply_criticId?: string
  ) {}
}
