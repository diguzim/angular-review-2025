import { Component, signal, effect, ViewEncapsulation, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = model(0, { alias: 'initialValue' });

  constructor() {
    effect(() => {
      console.log('Counter value changed:', this.counter());
    });
  }

  increment() {
    this.counter.update(value => value + 1);
  }
  decrement() {
    this.counter.update(value => value - 1);
  }
}
