import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from "@angular/core";

import { Map, Popup, Marker } from "mapbox-gl";
import { MapsService, PlacesService } from "../../services";

@Component({
  selector: "full-screen-page",
  templateUrl: "./full-screen-page.component.html",
  styleUrls: ["./full-screen-page.component.scss"],
})
export class FullScreenPageComponent implements AfterViewInit {

  private placesService = inject(PlacesService);
  private mapService = inject(MapsService);
  public isLocationReady = computed<boolean>(() => this.placesService.isLocationReady());

  //Recuperamos #map del html
  @ViewChild("map") divMap?: ElementRef;
  private map?: Map;

  ngAfterViewInit(): void {
   if(typeof window == 'undefined' || typeof navigator == 'undefined') return;

    if (typeof document === "undefined" || !this.divMap)
      throw new Error("No se pudo cargar el mapa");

    try {
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

    if (!this.isLocationReady()) return;

    //Si la ubicación del usuario está lista recentramos el mapa
    console.log("Centrando mapa en ubicación del usuario");
    this.map?.setCenter(this.placesService.userLocation!);

    //Popup
    const popup = new Popup()
      .setHTML(`
              <h6>Aquí estoy</h6>
              <span>Este es mi lugar en el mundo</span>
              `);

    //Marcador
    const marker = new Marker({ color: "blue" })
      .setLngLat(this.placesService.userLocation!)
      .setPopup(popup)
      .addTo(this.map!);

    //MapService
    this.mapService.setMap(this.map!);

  });



}
