import { Injectable } from "@angular/core";
import mapboxgl, { LngLatLike, Map } from "mapbox-gl";


@Injectable({
  providedIn: "root",
})
export class MapsService {


  private _map?: Map;
  get isMapReady() {
    return !!this._map;
  }

  public setMap(map: Map) {
    this._map = map;
  }

  flyTo(location: LngLatLike) {
    console.log("flyTo", location);

    if (!this.isMapReady) throw new Error("Mapa no disponible");
    this._map?.flyTo({ zoom: 16, center: location });
  }

  //Crear un marcador con un color aletorio que incluye popup
  addMarker(location: LngLatLike, popupText: string) {
    if (!this.isMapReady) throw new Error("Mapa no disponible");

    const color = "#xxxxxx".replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const marker = new mapboxgl.Marker({ color: color, draggable: false })
      .setLngLat(location)
      .setPopup(new mapboxgl.Popup().setHTML(popupText))
      .addTo(this._map!);
  }


  constructor() { }
}
