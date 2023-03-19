import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = '';
  array: any = [];

  @Output() typedText = new EventEmitter();

  add() {
    if (this.name !== "") {
      this.array.push(
        this.typedText.emit(this.name)
      );
    }
  }

}
