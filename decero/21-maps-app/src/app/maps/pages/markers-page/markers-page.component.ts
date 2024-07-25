import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";

import { LngLat, Map, Marker } from "mapbox-gl";

interface MarkerAndColor {
  marker: Marker;
  color: string;
}

interface PlainMarker {
  color: string;
  lngLat: [number, number];
}

@Component({
  selector: "markers-page",
  templateUrl: "./markers-page.component.html",
  styleUrl: "./markers-page.component.scss",
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {
  //Recuperamos #map del html
  @ViewChild("map") divMap?: ElementRef;
  public currentCenter: LngLat = new LngLat(-3.7672, 40.2291);
  public zoomLevel: number = 13;
  public map?: Map;

  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(): void {
    console.log(this.divMap);

    if (typeof document === "undefined" || !this.divMap)
      throw new Error("No se pudo cargar el mapa");

    try {
      this.map = new Map({
        container: this.divMap.nativeElement,
        style: "mapbox://styles/mapbox/streets-v12",
        center: this.currentCenter,
        zoom: this.zoomLevel,
      });

      this.loadFromLocalStorage();
    } catch (e) {
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  //Funcion para agregar marcadores
  addMarker(lngLat: LngLat, color: string = "red") {
    if (!this.map) return;

    const marker = new Marker({ color: color, draggable: true });
    marker.setLngLat(lngLat).addTo(this.map!);

    //Agregamos el marcador al array de marcadores
    this.markers.push({ marker: marker, color: color });

    //Agregamos un listener para cuando se mueva el marcador
    marker.on("dragend", () => {
      this.savetoLocalStorage();
    });
  }

  //Funcion para agregar marcadores
  createMarker() {
    if (!this.map) return;

    const color = "#xxxxxx".replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    const marker = new Marker({ color: color, draggable: true });
    marker.setLngLat(lngLat).addTo(this.map!);

    this.markers.push({ marker: marker, color: color });

    this.savetoLocalStorage();
  }

  //Funcion para obtener el color del texto acorde al color del marcador
  getTextColor(backgroundColor: string): string {
    const color = backgroundColor.substring(1); // Remove the '#'
    const rgb = parseInt(color, 16); // Convert hex to integer
    const r = (rgb >> 16) & 0xff; // Extract red
    const g = (rgb >> 8) & 0xff; // Extract green
    const b = (rgb >> 0) & 0xff; // Extract blue

    // Calculate the brightness of the color
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness > 186 ? "black" : "white"; // Return 'black' for light colors and 'white' for dark colors
  }

  //Para borrar el marcador
  removeMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  //Para mover al marcador al hacer click al marcador el listeneritem con flyto
  flyTo(marker: Marker) {
    this.map?.flyTo({ zoom: 15, center: marker.getLngLat() });
  }

  //Para guardar en local storage
  savetoLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map((m) => ({
      color: m.color,
      lngLat: [m.marker.getLngLat().lng, m.marker.getLngLat().lat],
    }));

    localStorage.setItem("markers", JSON.stringify(plainMarkers));
  }

  //Para cargar del local storage
  loadFromLocalStorage() {
    const plainMarkersString = localStorage.getItem("markers") ?? "[]";
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    });
  }
}
