import {RecycleStatus} from './recycleStatus';
import {ItemType} from './item-type.model';

export class RecycleItemDetail {
  constructor(
    public recycleOrderId: string,
    public itemId: string,
    public itemName: string,
    public itemImg: string,
    public itemType: ItemType,
    public recyclePrice: number,
    public status: RecycleStatus,
    public requestedTime: Date,
    public orderTime: Date,
    public componentReplaceStatus: string[],
    public vitalProblem: string[],
    public cpuStatus?: string,
    public memoryStatus?: string,
    public ssdStatus?: string,
    public voiceStatus?: string,
    public fixStatus?: string,
    public reason?: string
  ) {}
}
