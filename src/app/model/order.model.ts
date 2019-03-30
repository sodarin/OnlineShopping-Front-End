import {OrderItem} from './orderItem.model';
import {StatusEnum} from './statusEnum.model';

export class Order {
  constructor(
    public orderId: string,
    public clientId: string,
    public clientName: string,
    public clientAddr: string,
    public clientPhone: string,
    public clientPostcode: string,
    public orderItems: OrderItem[],
    public price: number,
    public status: StatusEnum,
    public orderTime: Date
  ) {}
}
