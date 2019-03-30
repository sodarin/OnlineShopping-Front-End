import {Injectable} from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderItem} from '../../model/orderItem.model';
import {StatusEnum} from '../../model/statusEnum.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderItem1: OrderItem = new OrderItem('10000001', '联想ThinkPad X1 Carbon', 2, 24999, '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg');
  orderItem2: OrderItem = new OrderItem('10000002', 'Apple MacBook Pro', 3, 21888, '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg');
  orderItem3: OrderItem = new OrderItem('10000003', '外星人Alienware15.6英寸Gsync屏', 1, 20999, '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg');
  orderItem4: OrderItem = new OrderItem('10000004', '联想(Lenovo)小新14英寸', 4, 5099, '../../../assets/img/134ca0101fa57098.jpg');
  orderItem5: OrderItem = new OrderItem('20000001','华为(HUAWEI) Mate RS', 1, 10999, '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg');
  orderItem6: OrderItem = new OrderItem('20000001','华为(HUAWEI) Mate RS', 7, 10999, '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg');
  orderItem7: OrderItem = new OrderItem('20000001','华为(HUAWEI) Mate RS', 99, 10999, '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg');
  orderItem8: OrderItem = new OrderItem('20000001','华为(HUAWEI) Mate RS', 8, 10999, '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg');
  orderItem9: OrderItem = new OrderItem('20000001','华为(HUAWEI) Mate RS', 895, 10999, '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg');

  orders: Order[] = [
    new Order('1', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2],  10000, StatusEnum.COMPLETED, new Date()),
    new Order('2', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A206', '12345678912', '529400', [this.orderItem1], 10000, StatusEnum.PENDING, new Date()),
    new Order('3', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem5], 10000, StatusEnum.COMPLETED, new Date()),
    new Order('4', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem3], 10000, StatusEnum.REFUND, new Date()),
    new Order('5', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem3, this.orderItem4, this.orderItem8], 10000, StatusEnum.REFUND_REQUESTED, new Date()),
    new Order('6', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem8, this.orderItem4, this.orderItem3, this.orderItem5, this.orderItem6], 10000, StatusEnum.SHIPPING, new Date()),
    new Order('7', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem3, this.orderItem4, this.orderItem5, this.orderItem6, this.orderItem7, this.orderItem8, this.orderItem9], 10000, StatusEnum.COMPLETED, new Date()),
    new Order('8', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1], 10000, StatusEnum.REFUND_REQUESTED, new Date()),
    new Order('9', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.REFUND, new Date()),
    new Order('10', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.SHIPPING, new Date()),
    new Order('11', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1], 10000, StatusEnum.SHIPPING, new Date()),
    new Order('12', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.PENDING, new Date()),
    new Order('13', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.REFUND_REQUESTED, new Date()),
    new Order('14', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem3], 10000, StatusEnum.COMPLETED, new Date()),
    new Order('15', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.COMPLETED, new Date()),
    new Order('16', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.COMPLETED, new Date()),
    new Order('17', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.COMPLETED, new Date()),
    new Order('18', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.SHIPPING, new Date()),
    new Order('19', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2], 10000, StatusEnum.SHIPPING, new Date()),
    new Order('20', '1001', '廖俊荣', '东北大学浑南区白塔街道浑南校区二舍A216', '18823070819', '529400', [this.orderItem1, this.orderItem2, this.orderItem9, this.orderItem8], 10000, StatusEnum.REFUND_REQUESTED, new Date()),

  ];

  constructor() { }

  getOrderListByClientId(clientId: string = '1001') {
    return this.orders.filter(item => item.clientId == clientId);
  }
}
