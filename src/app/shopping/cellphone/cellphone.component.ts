import { Component, OnInit } from '@angular/core';
import {CellphoneService} from '../../service/cellphone/cellphone.service';
import {Cellphone} from '../../model/cellphone.model';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.less']
})
export class CellphoneComponent implements OnInit {

  cellphoneList: Cellphone[];

  constructor(
    private cellphoneService$: CellphoneService
  ) { }

  ngOnInit() {
    this.cellphoneList = this.cellphoneService$.getCellphoneList()
  }

}
