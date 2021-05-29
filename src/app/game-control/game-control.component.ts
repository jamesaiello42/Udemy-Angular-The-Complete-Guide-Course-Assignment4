import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eachTick: EventEmitter<number> = new EventEmitter();
  ticks;
  i = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.ticks = setInterval(() => {
      this.eachTick.emit(this.i);
      this.i++;
    }, 1000)
  }

  onStop() {
    clearInterval(this.ticks);
    this.i = 1;
  }

}
