import { Component, signal, effect, ViewEncapsulation, input, model, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  host: {
    '[attr.aria-counter-value]': 'counter()',
  }
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {
  counter = model(0, { alias: 'initialValue' });

  constructor() {
    effect(() => {
      console.log('Counter value changed:', this.counter());
    });
  }

  ngOnInit() {
    console.log('CounterComponent initialized');
  }

  ngOnChanges() {
    console.log('CounterComponent changes detected');
  }

  ngOnDestroy() {
    console.log('CounterComponent destroyed');
  }

  increment() {
    this.counter.update(value => value + 1);
  }
  decrement() {
    this.counter.update(value => value - 1);
  }
}
