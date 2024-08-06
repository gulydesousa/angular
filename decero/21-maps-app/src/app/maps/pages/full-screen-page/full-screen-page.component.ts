import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from "@angular/core";

import { Map } from "mapbox-gl";
import { PlacesService } from "../../services";

@Component({
  selector: "full-screen-page",
  templateUrl: "./full-screen-page.component.html",
  styleUrls: ["./full-screen-page.component.scss"],
})
export class FullScreenPageComponent implements AfterViewInit {

  private placesService = inject(PlacesService);
  private isLocationReady = computed<boolean>(() => this.placesService.isLocationReady());

  //Recuperamos #map del html
  @ViewChild("map") divMap?: ElementRef;
  private map?: Map;

  ngAfterViewInit(): void {
    console.log(this.divMap);

    if (typeof document === "undefined" || !this.divMap)
      throw new Error("No se pudo cargar el mapa");

    try {
      console.log("Creando mapa");
      //Centramos el mapa en la ubicación del usuario
      this.map = new Map({
        container: this.divMap.nativeElement,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-74.0066, 40.7135],
        zoom: 15,
      });

    } catch (e) {
      console.log(e);
    }
  }

  //Efecto para mostrar la ubicación del usuario
  //Se ejecuta cada vez que cambia el valor de isLocationReady
  public test = effect(() => {
    //Si la ubicación del usuario está lista recentramos el mapa
    if (this.isLocationReady()) {
      console.log("Centrando mapa en ubicación del usuario");
      this.map?.setCenter(this.placesService.userLocation!);
    }
  });
}
