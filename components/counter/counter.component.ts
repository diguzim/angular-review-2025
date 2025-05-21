import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }
  decrement() {
    this.counter.update(value => value - 1);
  }
}
