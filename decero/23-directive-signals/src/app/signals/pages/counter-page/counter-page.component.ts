import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: "./counter-page.component.html",
  styleUrl: "./counter-page.component.scss",
})

export class CounterPageComponent {

  public counter = signal<number>(10);
  //Propiedad computada es de solo lectura
  public squareCounter = computed(() => this.counter() ** 2);

  public increment(value: number): void {
    this.counter.update((prev) => prev + value);
  }
}
