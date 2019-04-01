import {Injectable} from '@angular/core';
import {Earphone} from '../../model/earphone.model';
import {Item} from '../../model/item.model';
import {ItemType} from '../../model/item-type.model';

@Injectable({
  providedIn: 'root'
})
export class EarphoneService {

  earphones: Earphone[] = [
    new Item('10000001', '联想ThinkPad X1 Carbon', 24999, '2018（05CD）14英寸轻薄笔记本', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '黑色智慧', ' ', 1000, ItemType.EARPHONE),
    new Item('10000002', 'Apple MacBook Pro', 21888, '15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', '一身才华，一触，即发', ' ', 1002, ItemType.EARPHONE),
    new Item('10000003', '外星人Alienware15.6英寸Gsync屏', 20999, '"吃鸡"游戏笔记本电脑(Intel八代i7-8750H 16G 256GSSD+1T GTX1070 8G独显)', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '八代六核i7，GTX1070玩转"吃鸡"，Gsync显示屏拒绝画面撕裂，升级散热系统为游戏保驾护航',  ' ', 852, ItemType.EARPHONE),
    new Item('10000004', '联想(Lenovo)小新14英寸', 5099, '轻薄笔记本电脑(I5-8265U 8G 1T+256G PCIE MX230独显 IPS)渣渣灰', '../../../assets/img/134ca0101fa57098.jpg', '超大双混1T+256G固态_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏占比80.8%', ' ', 120, ItemType.EARPHONE),
    new Item('10000001', '联想ThinkPad X1 Carbon', 24999, '2018（05CD）14英寸轻薄笔记本', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '黑色智慧', ' ', 1000, ItemType.EARPHONE),
    new Item('10000002', 'Apple MacBook Pro', 21888, '15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', '一身才华，一触，即发', ' ', 1002, ItemType.EARPHONE),
    new Item('10000003', '外星人Alienware15.6英寸Gsync屏', 20999, '"吃鸡"游戏笔记本电脑(Intel八代i7-8750H 16G 256GSSD+1T GTX1070 8G独显)', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '八代六核i7，GTX1070玩转"吃鸡"，Gsync显示屏拒绝画面撕裂，升级散热系统为游戏保驾护航',  ' ', 852, ItemType.EARPHONE),
    new Item('10000004', '联想(Lenovo)小新14英寸', 5099, '轻薄笔记本电脑(I5-8265U 8G 1T+256G PCIE MX230独显 IPS)渣渣灰', '../../../assets/img/134ca0101fa57098.jpg', '超大双混1T+256G固态_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏占比80.8%', ' ', 120, ItemType.EARPHONE),
    new Item('10000001', '联想ThinkPad X1 Carbon', 24999, '2018（05CD）14英寸轻薄笔记本', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '黑色智慧', ' ', 1000, ItemType.EARPHONE),
    new Item('10000002', 'Apple MacBook Pro', 21888, '15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', '一身才华，一触，即发', ' ', 1002, ItemType.EARPHONE),
    new Item('10000003', '外星人Alienware15.6英寸Gsync屏', 20999, '"吃鸡"游戏笔记本电脑(Intel八代i7-8750H 16G 256GSSD+1T GTX1070 8G独显)', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '八代六核i7，GTX1070玩转"吃鸡"，Gsync显示屏拒绝画面撕裂，升级散热系统为游戏保驾护航',  ' ', 852, ItemType.EARPHONE),
    new Item('10000004', '联想(Lenovo)小新14英寸', 5099, '轻薄笔记本电脑(I5-8265U 8G 1T+256G PCIE MX230独显 IPS)渣渣灰', '../../../assets/img/134ca0101fa57098.jpg', '超大双混1T+256G固态_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏占比80.8%', ' ', 120, ItemType.EARPHONE),
    new Item('10000001', '联想ThinkPad X1 Carbon', 24999, '2018（05CD）14英寸轻薄笔记本', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '黑色智慧', ' ', 1000, ItemType.EARPHONE),
    new Item('10000002', 'Apple MacBook Pro', 21888, '15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', '一身才华，一触，即发', ' ', 1002, ItemType.EARPHONE),
    new Item('10000003', '外星人Alienware15.6英寸Gsync屏', 20999, '"吃鸡"游戏笔记本电脑(Intel八代i7-8750H 16G 256GSSD+1T GTX1070 8G独显)', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '八代六核i7，GTX1070玩转"吃鸡"，Gsync显示屏拒绝画面撕裂，升级散热系统为游戏保驾护航',  ' ', 852, ItemType.EARPHONE),
    new Item('10000004', '联想(Lenovo)小新14英寸', 5099, '轻薄笔记本电脑(I5-8265U 8G 1T+256G PCIE MX230独显 IPS)渣渣灰', '../../../assets/img/134ca0101fa57098.jpg', '超大双混1T+256G固态_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏占比80.8%', ' ', 120, ItemType.EARPHONE),
    new Item('10000001', '联想ThinkPad X1 Carbon', 24999, '2018（05CD）14英寸轻薄笔记本', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '黑色智慧', ' ', 1000, ItemType.EARPHONE),
    new Item('10000002', 'Apple MacBook Pro', 21888, '15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', '一身才华，一触，即发', ' ', 1002, ItemType.EARPHONE),
    new Item('10000003', '外星人Alienware15.6英寸Gsync屏', 20999, '"吃鸡"游戏笔记本电脑(Intel八代i7-8750H 16G 256GSSD+1T GTX1070 8G独显)', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '八代六核i7，GTX1070玩转"吃鸡"，Gsync显示屏拒绝画面撕裂，升级散热系统为游戏保驾护航',  ' ', 852, ItemType.EARPHONE),
    new Item('10000004', '联想(Lenovo)小新14英寸', 5099, '轻薄笔记本电脑(I5-8265U 8G 1T+256G PCIE MX230独显 IPS)渣渣灰', '../../../assets/img/134ca0101fa57098.jpg', '超大双混1T+256G固态_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏占比80.8%', ' ', 120, ItemType.EARPHONE),
    new Item('10000001', '联想ThinkPad X1 Carbon', 24999, '2018（05CD）14英寸轻薄笔记本', '../../../assets/img/e0ea6e25-c79b-4efd-b635-eca1c259ee53.jpg', '黑色智慧', ' ', 1000, ItemType.EARPHONE),
    new Item('10000002', 'Apple MacBook Pro', 21888, '15.4英寸笔记本电脑 深空灰色（2017Multi-Touch Bar/Core i7/16GB/512GB MPTT2CH/A）', '../../../assets/img/f347d7f8-00f3-431a-aa8a-7a051995e5d8.jpg', '一身才华，一触，即发', ' ', 1002, ItemType.EARPHONE),
    new Item('10000003', '外星人Alienware15.6英寸Gsync屏', 20999, '"吃鸡"游戏笔记本电脑(Intel八代i7-8750H 16G 256GSSD+1T GTX1070 8G独显)', '../../../assets/img/1d34903f-2165-44ff-855a-9265bfa0f996.jpg', '八代六核i7，GTX1070玩转"吃鸡"，Gsync显示屏拒绝画面撕裂，升级散热系统为游戏保驾护航',  ' ', 852, ItemType.EARPHONE),
    new Item('10000004', '联想(Lenovo)小新14英寸', 5099, '轻薄笔记本电脑(I5-8265U 8G 1T+256G PCIE MX230独显 IPS)渣渣灰', '../../../assets/img/134ca0101fa57098.jpg', '超大双混1T+256G固态_PCIE硬盘，丰富接口2*USB3.0+Type-C+HDMI,三边微边框FHD屏占比80.8%', ' ', 120, ItemType.EARPHONE),

  ];

  constructor() { }

  getLatestEarphoneList() {
    return this.earphones.filter((item, index) => index < 4);
  }

  getEarphoneById(id: string): Earphone {
    return this.earphones.filter(item => item.id === id).pop();
  }

  getEarphoneList() {
    return this.earphones;
  }
}
