import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, Subscription, interval, takeUntil, tap } from "rxjs";


@Component({
  selector: "products-uncommon-page",
  templateUrl: "./uncommon-page.component.html",
  styleUrl: "./uncommon-page.component.css",
})
export class UncommonPageComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
  }
  //i18nSelect
  public name: string = "John Doe";
  public gender: "male" | "female" | "other" = "male";

  public guests: string[] = ["John Doe", "Jane Doe", "Lucy Doherty", "Mark Donnelly", "Sara Donnelly", "Paul Martin", "Charlie Smith"];

  public invitationMap = {
    male: "invitarlo",
    female: "invitarla",
    other: "invitarle",
  };

  public person ={
    name:"John Doe",
    address:"Calle Falsa 123",
    age:30
  }

  public ChangeClient() {
    if (this.name === "John Doe") {
      this.name = "Jane Doe";
      this.gender = "female";
    } else {
      this.name = "John Doe";
      this.gender = "male";
    }
  }

  //i18nPlural
  public invitacionesPdtesMap = {
    "=0": "no tenemos invitaciones pendientes",
    "=1": "tenemos una invitación pendiente",
    other: "tenemos # invitaciones pendientes",
  };



  public Invitar()
  {
    this.guests.shift();
  }


  private isComponentActive = true;

  //Async Pipe
  //Crea un nuevo observable que emite un valor secuencial cada 2 segundos
  public myObservableTimer:Observable<number> = interval(2000)
  .pipe(
    tap((value) => console.log("Observable emitiendo valor: ", value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (this.isComponentActive) {
        resolve("Valor de la promesa");
      } else {
        resolve("");
      }
    }, 3000);
  });

  ngOnDestroy() {
    this.isComponentActive = false;
  }
}
