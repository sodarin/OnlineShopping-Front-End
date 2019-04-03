import {Component, Input, OnInit} from '@angular/core';
import {Passage} from '../../model/passage.model';
import {PassageService} from '../../service/passage/passage.service';

@Component({
  selector: 'app-passege',
  templateUrl: './passege.component.html',
  styleUrls: ['./passege.component.less']
})
export class PassegeComponent implements OnInit {

  @Input()
  passage: Passage;

  inputValue: string;
  omitContent: string;

  visible: boolean = false;

  constructor(
    private passageService$: PassageService
  ) { }

  ngOnInit() {
    this.omitContent = this.passage.content.slice(0, 50)
  }

  confirmReplyObject(event: any) {
    this.inputValue = `回复${this.passageService$.getReplyObjectByCriticId(event).criticName}：`
  }

  viewFullPassage() {
    this.visible = true
  }
  close() {
    this.visible = false
  }
}
