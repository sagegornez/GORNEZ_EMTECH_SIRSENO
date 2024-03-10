import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() IncNumber = new EventEmitter<number>();

  Start : any;
  Stop = 0;
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.Start = setInterval(() => {
      this.Stop++;
      this.IncNumber.emit(this.Stop);
    }, 1000);
  }
  stopGame() {
    clearInterval(this.Start);
  }
}