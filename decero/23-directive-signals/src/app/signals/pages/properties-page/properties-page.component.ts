import { Component, computed, effect, OnDestroy, signal } from "@angular/core";
import { User } from "../../interfaces/user-request.interface";

@Component({
  templateUrl: "./properties-page.component.html",
  styleUrl: "./properties-page.component.scss",
})

export class PropertiesPageComponent implements OnDestroy {

  public counter = signal<number>(0);
  public no_counter = signal<number>(0);

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  });

  //*Propiedad computed para el nombre completo
  public fullName = computed<string>(() => {
    if (!this.user()) return "";

    return `${this.user()?.first_name} ${this.user()?.last_name}`;
  });


  //?EFECTOS
  //?Se ejecuta cuando el usuario cambia o el contador cambia
  //Detecta cambios en las propiedades que se le pasan internamente
  public userChangedEffect = effect(() => {
    //Se ejecuta cuando el usuario cambia
    console.log(  this.user()   );
    console.log(  this.counter()   );
  });

  //?Los efectos se auto destruyen cuando el componente se destruye
  //Pero si aun asi se quiere destruir manualmente
  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }

  public increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  public noCount(value: number) {
    this.no_counter.update((current) => current + value);
    console.log(this.no_counter());
  }

  //!Esta forma es la mas elegante y segura de actualizar una propiedad de un objeto
  //*Otros metodos como Object.assign() o spread operator (...) no son seguros
  //*ya que no se garantiza que el objeto sea inmutable
  //*En este caso se garantiza que el objeto es inmutable
  onFieldUpdated(field: string, value: any) {
    //console.log(`Field ${field} updated with value ${value}`);

    this.user.update((current) => {
      switch (field) {
        case "first_name":
          current.first_name = value;
          break;
        case "last_name":
          current.last_name = value;
          break;
        case "email":
          current.email = value;
          break;
      }
      return structuredClone(current);
    });
  }
}
