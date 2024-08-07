import { inject, Injectable } from "@angular/core";
import { LngLatLike, Map } from "mapbox-gl";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

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
    if (!this.isMapReady) throw new Error("Mapa no disponible");

    this._map?.flyTo({ zoom: 16, center: location });
  }


  constructor() { }
}
