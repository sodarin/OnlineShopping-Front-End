import { Component, OnInit } from '@angular/core';
import {Keyboard} from '../../model/keyboard.model';
import {KeyboardService} from '../../service/keyboard/keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.less']
})
export class KeyboardComponent implements OnInit {

  keyboardList: Keyboard[];

  constructor(
    private keyboardService$: KeyboardService
  ) { }

  ngOnInit() {
    this.keyboardList = this.keyboardService$.getKeyboardList()
  }

}
