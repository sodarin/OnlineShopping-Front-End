import { Injectable } from '@angular/core';
import {Address} from '../../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList: Address[] = [
    new Address('1001', '10011', '袁子庆', '578502', '18823070819', '辽宁省沈阳市东北大学浑南区白塔街道浑南校区'),
    new Address('1001', '10012', 'Sodarin', '578500', '18604015102', '辽宁省沈阳市东北大学和平区主校区何世礼教学楼三楼205办公室'),
    new Address('1001', '10013', '陈子康', '529400', '18823070819', '广东省江门市恩平市东安镇龙胜街三巷二号曲龙村18号'),
    new Address('1001', '10014', '田野', '100000', '18823070819', '广东省江门市新会区新会第一中学'),
    new Address('1001', '10015', '廖俊荣', '578502', '18823070819', '东北大学浑南区白塔街道浑南校区二舍A216'),
    new Address('1002', '10022', '李少聪', '578502', '18823070819', '东北大学浑南区白塔街道浑南校区'),
    new Address('1002', '10023', '蒋彦鹏', '578502', '18604015102', '东北大学浑南区白塔街道浑南校区'),
    new Address('1002', '10024', '东方不败', '578502', '18823070819', '东北大学浑南区白塔街道浑南校区'),
  ];

  constructor() { }

  getAddressListByClientId(clientId: string): Address[] {
    console.log(clientId);
    return this.addressList.filter(item => item.clientId === clientId)
  }
}
