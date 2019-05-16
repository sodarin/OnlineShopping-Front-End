export class ShoppingCartItem {
  constructor(
    public shoppingCartItemId: number,
    public userId: number,
    public itemId: number,
    public totalNumber: number,
    public imgUrl: string,
    public name: string,
    public price: number,
    private totalPrice: number,
    private inventory: number
  ) {}
}
