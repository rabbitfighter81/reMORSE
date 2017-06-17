import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Output() onTextUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  updateText(event: any): void {
    const { value } = event.target;
    let word = value.match(/\b(\w+)\b/g) || [];
    this.onTextUpdated.emit(word);
  }

}
