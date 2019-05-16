import {GeneralConditionEnum} from './GeneralCondition.enum';

export class RecycleItemDetail {
  constructor(
    public recycleDetailId: number,
    public recycleOrderId: number,
    public purchaseTime: Date,
    public generalCondition: GeneralConditionEnum,
    public cpuStatus: number,
    public memoryStatus: number,
    public ssdStatus: number,
    public voiceStatus: number,
    public fixStatus: number,
  ) {}
}
