import { Component, OnInit } from '@angular/core';
import {Earphone} from '../../model/earphone.model';
import {EarphoneService} from '../../service/earphone/earphone.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.less']
})
export class HeadphonesComponent implements OnInit {

  earphoneList: Earphone[];

  constructor(
    private earphoneService$: EarphoneService
  ) { }

  ngOnInit() {
    this.earphoneList = this.earphoneService$.getEarphoneList()
  }

}
