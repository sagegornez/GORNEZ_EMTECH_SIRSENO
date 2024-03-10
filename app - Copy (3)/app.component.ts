import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';


  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIncNumber(newNumber: number) {
    if (newNumber % 2 === 0) {
      this.evenNumbers.push(newNumber);
    } else {
      this.oddNumbers.push(newNumber);
    }
  }

}