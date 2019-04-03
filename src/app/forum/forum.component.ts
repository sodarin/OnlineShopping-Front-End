import { Component, OnInit } from '@angular/core';
import {PassageService} from '../service/passage/passage.service';
import {Passage} from '../model/passage.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {

  passageList: Passage[];
  visible = false;

  editorContent: any;
  constructor(
    private passageService$: PassageService
  ) { }

  ngOnInit() {
    this.passageList = this.passageService$.getPassageList()
  }

  open() {
    this.visible = true
  }

  close() {
    this.visible = false
  }

  print(){
    console.log(this.editorContent);
    document.getElementById('test').innerHTML = this.editorContent
  }

}
