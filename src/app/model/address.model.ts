export class Address {
  constructor(
    public userId: number,
    public addressId: number,
    public recipientName: string,
    public postcode: string,
    public phone: string,
    public detailAddress: string
  ) {}
}
