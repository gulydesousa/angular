import { Component, signal } from "@angular/core";
import { MenuItem } from "../../interfaces/menu-item.interface";

@Component({
  selector: "signal-menu",
  templateUrl: "./signal-menu.component.html",
  styleUrl: "./signal-menu.component.scss",
})

export class SignalMenuComponent {

  //Menu con señales
  //Significa que el componente SignalMenuComponent
  //tiene una señal llamada menuItems que emite un array de objetos MenuItem.
  //cuando se emite la señal, el componente que escucha la señal
  public menuItems = signal<MenuItem[]>([
    { title: "Counter", route: "counter" },
    { title: "User Info", route: "user-info" },
    { title: "Properties", route: "properties" },
  ]);
}
