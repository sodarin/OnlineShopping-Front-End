export class ShoppingCartItem {
  constructor(
    public id: string,
    public clientId: string,
    public imgUrl: string,
    public itemName: string,
    public itemPrice: number,
    public itemId: string,
    public item_num: number
  ) {}
}
