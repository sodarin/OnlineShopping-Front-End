import {RecycleStatus} from './recycleStatus';
import {ItemType} from './item-type.model';

export class RecycleItemDisplay {
  constructor(
    public recycleOrderId: number,
    public orderId: number,
    public itemId: number,
    public userId: number,
    public name: string,
    public recyclePrice: number,
    public status: RecycleStatus,
    public requestedTime: Date,
    public type: ItemType
  ) {}
}
