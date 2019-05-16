import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Passage} from '../../model/passage.model';
import {PassageService} from '../../service/passage/passage.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-passege',
  templateUrl: './passege.component.html',
  styleUrls: ['./passege.component.less']
})
export class PassegeComponent implements OnInit, OnChanges {

  @Input()
  passage: Passage;
  @Input()
  loading: boolean;
  @Output()
  outputPassageId = new EventEmitter<number>();


  omitContent: string;


  constructor(

  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.passage.content = this.passage.content.replace(/<[^>]+>/g,"");
    this.omitContent = this.passage.content.slice(0, 50)
  }



  emitRequest() {
    this.outputPassageId.emit(this.passage.passageId)
  }


}
