import {Component, OnInit} from '@angular/core';
import {NzMessageService, NzModalRef} from 'ng-zorro-antd';
import {OrderService} from '../../../service/order/order.service';
import {Order} from '../../../model/order.model';
import {OrderItem} from '../../../model/orderItem.model';
import {LoginService} from '../../../service/login/login.service';
import {AddressService} from '../../../service/address/address.service';
import {Address} from '../../../model/address.model';
import {StatusEnum} from '../../../model/statusEnum.model';
import {Item} from '../../../model/item.model';
import {ItemService} from '../../../service/item/item.service';
import {RecycleDetailParam} from '../../../model/RecycleDetailParam';
import {RecycleComponentStatusParam} from '../../../model/RecycleComponentStatusParam';
import {RecycleVitalProblemParam} from '../../../model/RecycleVitalProblemParam';
import {RecycleService} from '../../../service/recycle/recycle.service';

@Component({
  selector: 'app-add-recycle-order',
  templateUrl: './add-recycle-order.component.html',
  styleUrls: ['./add-recycle-order.component.less']
})
export class AddRecycleOrderComponent implements OnInit {

  current = 0;

  orderId: string;
  specifiedOrder: Order = null;
  orderItemsList: OrderItem[];
  selectedItem: OrderItem;
  address: Address;
  item: Item;

  useStatus: any;

  cpuStatus: any;
  memoryStatus: any;
  ssdStatus: any;
  voiceStatus: any;
  fixStatus: any;
  componentReplaceSelectedStatusList = [];
  vitalProblemList = [];
  componentReplaceDisabled: boolean = false;
  vitalProbleDisabled: boolean = false;

  computerComponentReplaceStatusList = [
    {value: '0', label: '无任何维修'},
    {value: '1', label: '曾维修过内存条'},
    {value: '2', label: '曾维修过硬盘'},
    {value: '3', label: '曾维修过主板'},
    {value: '4', label: '曾维修过CPU'},
    {value: '5', label: '曾维修过键盘'},
    {value: '6', label: '曾维修过风扇'},
    {value: '7', label: '曾维修过电池'},
    {value: '8', label: '曾维修过显卡'},
  ];
  computerVitalProblemList = [
    {value: '0', label: '无重大问题'},
    {value: '1', label: '接口异常'},
    {value: '2', label: '无法正常开机'},
    {value: '3', label: '无电池，电池肿胀、无法使用'},
    {value: '4', label: '硬盘损坏'},
    {value: '5', label: '严重维修'},
    {value: '6', label: '机身进水'},
    {value: '7', label: '键盘损坏严重'},
  ];

  cellphoneComponentReplaceStatusList = [
    {value: '0', label: '无任何维修'},
    {value: '1', label: '曾维修过电池'},
    {value: '2', label: '曾维修过屏幕'},
    {value: '3', label: '曾维修过处理器'},
    {value: '4', label: '曾维修过接口'},
  ];
  cellphoneVitalProblemList = [
    {value: '0', label: '无重大问题'},
    {value: '1', label: '接口异常'},
    {value: '2', label: '无法正常开机'},
    {value: '3', label: '无电池，电池肿胀、无法使用'},
    {value: '4', label: '严重维修'},
    {value: '5', label: '机身进水'},
    {value: '6', label: '屏幕损坏严重'},
  ];

  earphoneComponentReplaceStatusList = [
    {value: '0', label: '包装配件齐全'},
    {value: '1', label: '缺少原装外包装盒'},
    {value: '2', label: '缺少原装说明书'},
    {value: '3', label: '缺少原装保修卡'},
    {value: '4', label: '缺少原装耳机线'},
    {value: '5', label: '缺少原装充电线'},
  ];

  earphoneVitalProblemList = [
    {value: '0', label: '无重大问题'},
    {value: '1', label: '蓝牙功能无法正常使用'},
    {value: '2', label: '声音无法正常使用'},
    {value: '3', label: '电池损耗严重'},
    {value: '4', label: '严重维修'},
    {value: '5', label: '机身进水'},
    {value: '6', label: '外观损毁严重'},
  ];

  mouseComponentReplaceStatusList = [
    {value: '0', label: '包装配件齐全'},
    {value: '1', label: '缺少原装外包装盒'},
    {value: '2', label: '缺少原装说明书'},
    {value: '3', label: '缺少原装保修卡'},
    {value: '4', label: '缺少原装USB连接线'},
  ];

  mouseVitalProblemList = [
    {value: '0', label: '无重大问题'},
    {value: '1', label: '蓝牙鼠标无法正常使用功能'},
    {value: '2', label: '有线鼠标无法正常使用功能'},
    {value: '3', label: '按键有严重问题'},
    {value: '4', label: '滚轮有严重问题'},
    {value: '5', label: '外观氧化/磨损/划痕严重'},
  ];

  keyboardComponentReplaceStatusList = [
    {value: '0', label: '包装配件齐全'},
    {value: '1', label: '缺少原装外包装盒'},
    {value: '2', label: '缺少原装说明书'},
    {value: '3', label: '缺少原装保修卡'},
    {value: '4', label: '缺少原装USB连接线'},
    {value: '5', label: '缺少键帽'}
  ];

  keyboardVitalProblemList = [
    {value: '0', label: '无重大问题'},
    {value: '1', label: '蓝牙无法正常使用'},
    {value: '2', label: '有线无法正常使用'},
    {value: '3', label: '按键有严重问题'},
    {value: '4', label: '外观氧化/磨损/划痕严重'},
  ];

  constructor(
    private _modal: NzModalRef,
    private _message: NzMessageService,
    private orderService$: OrderService,
    private loginService$: LoginService,
    private addressService$: AddressService,
    private itemService$: ItemService,
    private recycleService$: RecycleService
  ) { }

  ngOnInit() {

  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  submit(): boolean {
    console.log(this.ssdStatus);
    console.log(this.memoryStatus);
    console.log(this.componentReplaceSelectedStatusList);
    console.log(this.vitalProblemList);
    let flag: boolean = false;
    let recycleDetailParam = new RecycleDetailParam(this.specifiedOrder.tradingTime, this.useStatus, this.cpuStatus, this.memoryStatus, this.ssdStatus, this.voiceStatus, this.fixStatus);
    let recycleComponentStatusList: RecycleComponentStatusParam[] = [];
    let recycleVitalProblemList: RecycleVitalProblemParam[] = [];
    this.componentReplaceSelectedStatusList.forEach( item => {
      recycleComponentStatusList.push(new RecycleComponentStatusParam(item))
    });
    this.vitalProblemList.forEach(item => {
      recycleVitalProblemList.push(new RecycleVitalProblemParam(item))
    });
    this.recycleService$.createNewRecycleOrder(this.loginService$.user.userId, this.specifiedOrder.orderId, this.item.itemId, 500, recycleDetailParam, recycleVitalProblemList, recycleComponentStatusList).subscribe( result => {
      this._message.success("提交成功！");
      this._modal.destroy("success")
    }, error1 => {
      this._message.error(error1.error);
    });
    return flag
  }

  cancel() {
    this._modal.destroy()
  }

  searchOrderById() {
    if (this.orderId == '') {
      this._message.error('订单编号不能为空')
    } else {
      this.orderService$.getOrderById(Number(this.orderId), this.loginService$.user.userId).subscribe( result => {
        if (result == null)
          this._message.error('没有指定的订单编号');
        else {
          if (result.status == StatusEnum.REFUND_REQUESTED || result.status == StatusEnum.REFUND) {
            this._message.error("该订单已申请退款")
          } else {
            this.specifiedOrder = result;
            this.orderItemsList = this.specifiedOrder.orderItemDetails;
            this._message.success('已查询到指定订单');
            this.selectedItem = null;
            this.addressService$.getAddressByAddressId(result.addressId).subscribe( result => {
              this.address = result;
            }, error1 => this._message.error(error1.error))
          }
        }
      }, error1 => this._message.error(error1.error));
    }
  }

  selectRecycleItem(item: OrderItem) {
    this.selectedItem = item;
    this.itemService$.getDetailById(this.selectedItem.itemId.toString()).subscribe( result => {
      this.item = result;
    }, error1 => this._message.error(error1.error))
  }

  detectComponentSelectedStatusChange() {

  }

  detectComponentReplaceSelectedStatusChange() {
    this.componentReplaceSelectedStatusList.forEach(item => {
      if (item == '0'){
        this.componentReplaceSelectedStatusList = this.componentReplaceSelectedStatusList.filter(item => item == '0');
        this.componentReplaceDisabled = true;
      }
    });
    if (this.componentReplaceSelectedStatusList.length == 0)
      this.componentReplaceDisabled = false
  }
  detectVitalProblemSelectedChange() {
    this.vitalProblemList.forEach(item => {
      if (item == '0'){
        this.vitalProblemList = this.vitalProblemList.filter(item => item == '0');
        this.vitalProbleDisabled = true;
      }
    });
    if (this.vitalProblemList.length == 0)
      this.vitalProbleDisabled = false
  }

}
