import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNum: number[] = [];
  evenNum: number[] = [];

  onEachTick(tick: number) {
    if (tick % 2 === 0) 
      this.evenNum.push(tick);
    else
      this.oddNum.push(tick);
  }
}
