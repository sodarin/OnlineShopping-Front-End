import {OrderItem} from './orderItem.model';
import {StatusEnum} from './statusEnum.model';

export class Order {
  constructor(
    public orderId: number,
    public userId: number,
    public addressId: number,
    public status: StatusEnum,
    public tradingTime: Date,
    public orderItemDetails: OrderItem[]
  ) {}
}
