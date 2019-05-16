import {ItemType} from './item-type.model';

export class OrderItem {
  constructor(
    public orderItemId: number,
    public itemId: number,
    public name: string,
    public number: number,
    public price: number,
    public imgUrl: string,
  ) {}
}
