import {Injectable} from '@angular/core';
import {RecycleItemDisplay} from '../../model/recycleOrder.model';
import {RecycleStatus} from '../../model/recycleStatus';
import {RecycleItemDetail} from '../../model/recycleItemDetail.model';
import {ItemType} from '../../model/item-type.model';

@Injectable({
  providedIn: 'root'
})
export class RecycleService {

  recycleItemDisplayLists: RecycleItemDisplay[] = [
    new RecycleItemDisplay('1', '1', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('2', '1', '10000002', '联想ThinkPad X1 Carbon', 0, RecycleStatus.NOT_PASSED, new Date()),
    new RecycleItemDisplay('3', '2', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.COMPLETED, new Date()),
    new RecycleItemDisplay('4', '3', '20000001', '联想ThinkPad X1 Carbon', 1000, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('5', '4', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('6', '5', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('7', '6', '10000003', '联想ThinkPad X1 Carbon', 999, RecycleStatus.REQUESTED, new Date()),
    new RecycleItemDisplay('8', '6', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('9', '7', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.CANCELLED, new Date()),
  ];

  recycleItemDetail1 = new RecycleItemDetail('1', '10000001', '联想ThinkPad X1 Carbon', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', ItemType.COMPUTER,  4999, RecycleStatus.PASSED, new Date(), new Date(), ['无任何维修'], ['接口异常', '无法正常开机'], 'i5处理器', '16g内存', '256g固态硬盘');
  recycleItemDetail2 = new RecycleItemDetail('2', '10000002', '联想ThinkPad X1 Carbon', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', ItemType.MOUSE,  0, RecycleStatus.NOT_PASSED, new Date(), new Date(), ['缺少原装说明书', '缺少原装USB连接线'], ['按键有严重问题', '外观氧化/磨损/划痕严重'], '', '', '', '', '', '损坏较严重，不能回收');
  recycleItemDetail3 = new RecycleItemDetail('7', '10000003', '联想ThinkPad X1 Carbon', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', ItemType.EARPHONE,  999, RecycleStatus.CANCELLED, new Date(), new Date(), ['包装配件齐全'], ['无重大问题'], '', '', '', '声音正常', '无拆无修');

  constructor() { }

  getRecycleItemDisplayListByClientId(clientId: string = '1001') {
    return this.recycleItemDisplayLists
  }

  getRecycleItemDetailByRecycleOrderId(recycleOrderId: string = '1') {
    if (recycleOrderId == '1')
      return this.recycleItemDetail1;
    else if (recycleOrderId == '2')
      return this.recycleItemDetail2;
    else
      return  this.recycleItemDetail3
  }
}
