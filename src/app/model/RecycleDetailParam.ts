export class RecycleDetailParam {
  constructor(
    public purchaseTime: Date,
    public generalCondition: string,
    public cpuStatus: string,
    public memoryStatus: string,
    public ssdStatus: string,
    public voiceStatus: string,
    public fixStatus: string
  ) {}
}
