import { Component, OnInit } from '@angular/core';
import {Computer} from '../../model/computer.model';
import {ComputerService} from '../../service/computer/computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.less']
})
export class ComputerComponent implements OnInit {

  computerList: Computer[];

  constructor(
    private computerService$: ComputerService
  ) { }

  ngOnInit() {
    this.computerList = this.computerService$.getComputerList()
  }

}
