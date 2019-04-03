import {RecycleStatus} from './recycleStatus';

export class RecycleItemDisplay {
  constructor(
    public recycleOrderId: string,
    public orderId: string,
    public itemId: string,
    public itemName: string,
    public recyclePrice: number,
    public status: RecycleStatus,
    public requestedTime: Date,
  ) {}
}
