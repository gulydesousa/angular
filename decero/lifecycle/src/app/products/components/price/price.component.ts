import { Component, Input
        ,OnChanges, OnDestroy, OnInit
        , SimpleChanges } from "@angular/core";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "products-price",
  templateUrl: "./price.component.html",
  styleUrl: "./price.component.css",
})
export class PriceComponent

implements OnInit, OnChanges, OnDestroy
{
  @Input() public price: number = 0;

  public interval$?: Subscription;

  ngOnInit() {
    // Code to be executed when the component is initialized
    console.log("HIJO: ngOnInit called");

    //Se crea un observable que emite un valor cada segundo
    //interval es un operador de RxJS que emite un valor cada cierto tiempo
    //En este caso, emite un valor cada segundo
    //el valor empieza en 0 y se incrementa en 1 cada segundo
    //El observable se suscribe a este observable y muestra el valor en la consola
    this.interval$ =
    interval(1000).subscribe((value) => console.log(`Tick ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Code to be executed when the input properties of the component change
    console.log("HIJO: ngOnChanges called");
    console.log({changes});
  }

  ngOnDestroy() {
    // Code to be executed when the component is destroyed
    console.log("HIJO: ngOnDestroy called");

    this.interval$?.unsubscribe();
  }
}
