import { Injectable } from '@angular/core';
import {Keyboard} from '../../model/keyboard.model';
import {Item} from '../../model/item.model';
import {Cellphone} from '../../model/cellphone.model';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  keyboardList: Keyboard[] = [
    new Item('20000001','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000002','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000003','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000004','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000001','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000002','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000003','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000004','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000001','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000002','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000003','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000004','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000001','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000002','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000003','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000),
    new Item('20000004','华为(HUAWEI) Mate RS', 10999, '保时捷设计版 炫黑 全网通', '../../../assets/img/5a6fc150-bd09-4169-ada2-595d85674c6a.jpg', '致敬时代致敬时代',  ' ', 2000)

  ];

  constructor() { }

  getLatestKeyboardList() {
    return this.keyboardList.filter((item, index) => index < 4);
  }

  getKeyboardById(id: string): Cellphone {
    return this.keyboardList.filter(item => item.id === id).pop();
  }

  getKeyboardList() {
    return this.keyboardList;
  }
}
