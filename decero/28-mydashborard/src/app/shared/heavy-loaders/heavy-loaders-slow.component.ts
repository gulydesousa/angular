import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[300px]', cssClass]">
    Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({required:true}) cssClass!: string;

  //Creamos un codigo que simula una carga pesada
  constructor() {
    const dstart = Date.now();
    let secondsPassed = 0;
    let lastPrint = dstart;
    while (Date.now() - dstart < 5000) {
      // Esperamos 5 segundos
      if (Date.now() - lastPrint >= 1000) {
        secondsPassed++;
        console.log(
          `${secondsPassed} segundo${secondsPassed > 1 ? "s" : ""} ha${
            secondsPassed > 1 ? "n" : ""
          } pasado`
        );
        lastPrint = Date.now();
      }
    }
    console.log("HeavyLoadersSlowComponent created");
  }
}
