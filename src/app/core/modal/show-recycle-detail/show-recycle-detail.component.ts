import {Component, Input, OnInit} from '@angular/core';
import {RecycleService} from '../../../service/recycle/recycle.service';
import {RecycleItemDetail} from '../../../model/recycleItemDetail.model';
import {ItemService} from '../../../service/item/item.service';
import {Item} from '../../../model/item.model';
import {ItemType} from '../../../model/item-type.model';
import {GeneralConditionDisplayEnum} from '../../../model/GeneralConditionDisplay.enum';
import {GeneralConditionEnum} from '../../../model/GeneralCondition.enum';

@Component({
  selector: 'app-show-recycle-detail',
  templateUrl: './show-recycle-detail.component.html',
  styleUrls: ['./show-recycle-detail.component.less']
})
export class ShowRecycleDetailComponent implements OnInit {

  @Input()
  data: any;

  generalConditionDisplay = GeneralConditionDisplayEnum;

  recycleItemDetail: RecycleItemDetail;

  item: Item;

  componentStatusList = [];
  vitalProblemList = [];

  generalCondition;

  cpuStatus;
  memoryStatus;
  ssdStatus;
  fixStatus;
  voiceStatus;

  computerCpuStatusList = [
    {value: '1', label: 'i3'},
    {value: '2', label: 'i5'},
    {value: '3', label: 'i7'}
  ];
  computerMemoryStatusList = [
    {value: '1', label: '4g'},
    {value: '2', label: '8g'},
    {value: '3', label: '16g'},
    {value: '4', label: '32g及以上'}
  ];
  computerSSDStatusList = [
    {value: '1', label: '无固态硬盘'},
    {value: '2', label: '128g'},
    {value: '3', label: '256g'},
    {value: '4', label: '512g及以上'}
  ];

  cellphoneMemoryStatusList = [
    {value: '1', label: '4g'},
    {value: '2', label: '8g'},
    {value: '3', label: '16g'},
    {value: '4', label: '32g及以上'}
  ];
  cellphoneSSDStatusList = [
    {value: '1', label: '32g'},
    {value: '2', label: '64g'},
    {value: '3', label: '128g'}
  ];
  voiceStatusList = [
    {value: '0', label: '声音异常或有余音杂音'},
    {value: '1', label: '声音正常'}
  ];
  fixStatusList = [
    {value: '0', label: '有拆修'},
    {value: '1', label: '无拆无修'}
  ];


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
    private recycleService$: RecycleService,
    private itemService$: ItemService
  ) { }

  ngOnInit() {
    this.recycleService$.getRecycleDetail(this.data.recycleOrderID).subscribe( result => {
      this.recycleItemDetail = result;
      if (result.generalCondition == 1)
        this.generalCondition = "全新未拆";
      else if (result.generalCondition == 0.9)
        this.generalCondition = "9成新，无使用痕迹";
      else if (result.generalCondition == 0.8)
        this.generalCondition = "8成新，表面无明显使用痕迹";
      else if (result.generalCondition == 0.7)
        this.generalCondition = "7成新，使用痕迹较明显";
      else if (result.generalCondition == 0.6)
        this.generalCondition = "6成新，有明显损耗痕迹";
      else
        this.generalCondition = "5成新，多处磨损、刮擦";
      if (this.data.type == ItemType.COMPUTER) {
        this.computerCpuStatusList.forEach(status => {
          if (result.cpuStatus == Number(status.value))
            this.cpuStatus = status.label
        });
        this.computerMemoryStatusList.forEach(status => {
          if (result.memoryStatus == Number(status.value))
            this.memoryStatus = status.label
        });
        this.computerSSDStatusList.forEach(status => {
          if (result.ssdStatus == Number(status.value))
            this.ssdStatus = status.label
        })
      }
      if (this.data.type == ItemType.CELLPHONE) {
        this.cellphoneMemoryStatusList.forEach(status => {
          if (result.memoryStatus == Number(status.value))
            this.memoryStatus = status.label
        });
        this.cellphoneSSDStatusList.forEach(status => {
          if (result.ssdStatus == Number(status.value))
            this.ssdStatus = status.label
        })
      }
      if (this.data.type == ItemType.EARPHONE) {
        this.voiceStatusList.forEach(status => {
          if (result.voiceStatus == Number(status.value))
            this.voiceStatus = status.label
        });
        this.fixStatusList.forEach(status => {
          if (result.fixStatus == Number(status.value))
            this.fixStatus = status.label
        })
      }
    });
    this.itemService$.getDetailById(this.data.itemId).subscribe( result => {
      this.item = result;
    });
    this.recycleService$.getComponentStatus(this.data.recycleOrderID).subscribe( result => {
      if (this.data.type == ItemType.COMPUTER) {
        result.forEach( status => {
          this.computerComponentReplaceStatusList.forEach(computerStatus => {
            if (status.componentStatus == Number(computerStatus.value))
              this.componentStatusList.push(computerStatus.label)
          })
        })
      } else if (this.data.type == ItemType.EARPHONE) {
        result.forEach( status => {
          this.earphoneComponentReplaceStatusList.forEach(earphoneStatus => {
            if (status.componentStatus == Number(earphoneStatus.value))
              this.componentStatusList.push(earphoneStatus.label)
          })
        })
      } else if (this.data.type == ItemType.MOUSE){
        result.forEach( status => {
          this.mouseComponentReplaceStatusList.forEach(mouseStatus => {
            if (status.componentStatus == Number(mouseStatus.value))
              this.componentStatusList.push(mouseStatus.label)
          })
        })
      } else if (this.data.type == ItemType.CELLPHONE) {
        result.forEach( status => {
          this.cellphoneComponentReplaceStatusList.forEach(cellphoneStatus => {
            if (status.componentStatus == Number(cellphoneStatus.value))
              this.componentStatusList.push(cellphoneStatus.label)
          })
        })
      } else {
        result.forEach( status => {
          this.keyboardComponentReplaceStatusList.forEach(keyboardStatus => {
            if (status.componentStatus == Number(keyboardStatus.value))
              this.componentStatusList.push(keyboardStatus.label)
          })
        })
      }
    });
    this.recycleService$.getVitalProblem(this.data.recycleOrderID).subscribe( result => {
      if (this.data.type == ItemType.COMPUTER) {
        result.forEach( vitalProblem => {
          this.computerVitalProblemList.forEach(computerVitalProblem => {
            if (vitalProblem.vitalProblem == Number(computerVitalProblem.value))
              this.vitalProblemList.push(computerVitalProblem.label)
          })
        })
      } else if (this.data.type == ItemType.EARPHONE) {
        result.forEach( vitalProblem => {
          this.earphoneVitalProblemList.forEach(earphoneVitalProblem => {
            if (vitalProblem.vitalProblem == Number(earphoneVitalProblem.value))
              this.vitalProblemList.push(earphoneVitalProblem.label)
          })
        })
      } else if (this.data.type == ItemType.MOUSE){
        result.forEach( vitalProblem => {
          this.mouseVitalProblemList.forEach(mouseVitalProblem => {
            if (vitalProblem.vitalProblem == Number(mouseVitalProblem.value))
              this.vitalProblemList.push(mouseVitalProblem.label)
          })
        })
      } else if (this.data.type == ItemType.CELLPHONE) {
        result.forEach( vitalProblem => {
          this.cellphoneVitalProblemList.forEach(cellphoneVitalProblem => {
            if (vitalProblem.vitalProblem == Number(cellphoneVitalProblem.value))
              this.vitalProblemList.push(cellphoneVitalProblem.label)
          })
        })
      } else {
        result.forEach( vitalProblem => {
          this.keyboardVitalProblemList.forEach(keyboardVitalProblem => {
            if (vitalProblem.vitalProblem == Number(keyboardVitalProblem.value))
              this.vitalProblemList.push(keyboardVitalProblem.label)
          })
        })
      }
    })
  }

}
