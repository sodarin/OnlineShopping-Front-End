import { Component, OnInit } from '@angular/core';
import {Mouse} from '../../model/mouse.model';
import {MouseService} from '../../service/mouse/mouse.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.less']
})
export class MouseComponent implements OnInit {

  mouseList: Mouse[];

  constructor(
    private mouseService$: MouseService
  ) { }

  ngOnInit() {
    this.mouseList = this.mouseService$.getMouseList()
  }

}
