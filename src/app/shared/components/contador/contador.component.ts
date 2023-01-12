import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent {
  result: number = 0;

  increment() {
    this.result++;
  }

  decrement() {
    this.result--;
  }
}
