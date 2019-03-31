import {Injectable} from '@angular/core';
import {RecycleItemDisplay} from '../../model/recycleOrder.model';
import {RecycleStatus} from '../../model/recycleStatus';

@Injectable({
  providedIn: 'root'
})
export class RecycleService {

  recycleItemDisplayLists: RecycleItemDisplay[] = [
    new RecycleItemDisplay('1', '1', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('2', '1', '10000002', '联想ThinkPad X1 Carbon', 1999, RecycleStatus.NOT_PASSED, new Date()),
    new RecycleItemDisplay('3', '2', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.COMPLETED, new Date()),
    new RecycleItemDisplay('4', '3', '20000001', '联想ThinkPad X1 Carbon', 1000, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('5', '4', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('6', '5', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('7', '6', '10000003', '联想ThinkPad X1 Carbon', 999, RecycleStatus.REQUESTED, new Date()),
    new RecycleItemDisplay('8', '6', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.PASSED, new Date()),
    new RecycleItemDisplay('9', '7', '10000001', '联想ThinkPad X1 Carbon', 4999, RecycleStatus.CANCELLED, new Date()),
  ];

  constructor() { }

  getRecycleItemDisplayListByClientId(clientId: string = '1001') {
    return this.recycleItemDisplayLists
  }
}
