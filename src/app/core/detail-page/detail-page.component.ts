import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../../model/item.model';
import {ComputerService} from '../../service/computer/computer.service';
import {CellphoneService} from '../../service/cellphone/cellphone.service';
import {MouseService} from '../../service/mouse/mouse.service';
import {EarphoneService} from '../../service/earphone/earphone.service';
import {KeyboardService} from '../../service/keyboard/keyboard.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less']
})
export class DetailPageComponent implements OnInit {

  item: Item;

  number: number = 1;

  constructor(
    private routeInfo: ActivatedRoute,
    private computerService$: ComputerService,
    private cellphoneService$: CellphoneService,
    private mouseService$: MouseService,
    private earphoneService$: EarphoneService,
    private keyboardService$: KeyboardService
  ) { }

  ngOnInit() {
    let itemId = this.routeInfo.snapshot.params['id'];
    if (itemId.startsWith('10')) {
      this.item = this.computerService$.getComputerById(itemId);
      console.log(this.item)
    }
    if (itemId.startsWith('20')){
      this.item = this.cellphoneService$.getCellphoneById(itemId);
      console.log(this.item);
    }
  }

}
