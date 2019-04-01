import {ItemType} from './item-type.model';

export class OrderItem {
  constructor(
    public itemId: string,
    public itemName: string,
    public itemNum: number,
    public itemPrice: number,
    public itemImg: string,
    public itemType: ItemType
  ) {}
}
