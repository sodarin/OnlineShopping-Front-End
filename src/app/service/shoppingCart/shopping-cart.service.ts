import { Injectable } from '@angular/core';
import {ShoppingCartItem} from '../../model/shopping-cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartItems: ShoppingCartItem[] = [
    new ShoppingCartItem('1', '1001', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '联想ThinkPad X1 Carbon', 24999, '10000001', 2),
    new ShoppingCartItem('2', '1001', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', 'Apple MacBook Pro', 21888, '10000002', 4),
    new ShoppingCartItem('3', '1001', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '外星人Alienware15.6英寸Gsync屏', 20999, '10000003', 3),
    new ShoppingCartItem('4', '1001', '../../../assets/img/134ca0101fa57098.jpg', '联想(Lenovo)小新14英寸', 5099, '10000004', 78),
    new ShoppingCartItem('5', '1001', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '华为(HUAWEI) Mate RS', 10999, '20000001', 99),
    new ShoppingCartItem('6', '1001', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '华为(HUAWEI) Mate RS', 10999, '20000002', 1),
    new ShoppingCartItem('7', '1001', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '华为(HUAWEI) Mate RS', 10999, '20000003', 50),
    new ShoppingCartItem('8', '1001', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '华为(HUAWEI) Mate RS', 10999, '20000004', 10),
    new ShoppingCartItem('1', '1001', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '联想ThinkPad X1 Carbon', 24999, '10000001', 2),
    new ShoppingCartItem('2', '1001', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', 'Apple MacBook Pro', 21888, '10000002', 4),
    new ShoppingCartItem('9', '1002', '', '', 5000, '10000001', 2),
    new ShoppingCartItem('10', '1002', '', '', 5000, '10000001', 2),
    new ShoppingCartItem('11', '1002', '', '', 5000, '10000001', 2),
    new ShoppingCartItem('12', '1002', '', '', 5000, '10000001', 2),
    new ShoppingCartItem('13', '1002', '', '', 5000, '10000001', 2),
    new ShoppingCartItem('14', '1002', '', '', 5000, '10000001', 2),

  ];

  constructor() { }

  getShoppingCartItemsByPageIndex(pageIndex: number, clientId: string = '1001'): ShoppingCartItem[] {
    if (pageIndex == 1) {
      return this.shoppingCartItems.filter(item => item.clientId === clientId).slice(0, 8);
    } else {
      return this.shoppingCartItems.filter(item => item.clientId === clientId).slice(9);
    }
  }
}
