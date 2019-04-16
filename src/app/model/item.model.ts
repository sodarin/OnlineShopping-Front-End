import {ItemType} from './item-type.model';

export class Item {
  constructor(
    public itemId: string,
    public name: string,
    public price: number,
    public desc: string,
    public imgUrl: string,
    public advantage: string,
    public detail: string,
    public inventory: number,
    public type: ItemType
  ) {}
}
