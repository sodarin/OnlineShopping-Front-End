import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.less']
})
export class SearchButtonComponent implements OnInit {

  @Output()
  searchContent = new EventEmitter<string>();

  content: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.searchContent.emit(this.content)
  }

}
