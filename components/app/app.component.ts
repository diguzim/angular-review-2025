import { Component, computed, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-review-2025';
  
  counterComponent = viewChild(CounterComponent);
  counterComponentInnerCounterValue = computed(() => this.counterComponent()?.counter());

  counter = signal(0);

  onCounterChange($event: number) {
    this.counter.set($event);
  }
}
