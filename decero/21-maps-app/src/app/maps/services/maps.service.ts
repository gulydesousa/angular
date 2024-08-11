import { DirectionsApiClient } from "../api/directionsApiClient";
import { DirectionsResponse, Route } from "../interfaces/directions-response.interface";
import { inject, Injectable } from "@angular/core";
import mapboxgl, { LngLatLike, Map } from "mapbox-gl";
import { GeoJSON } from "geojson";


@Injectable({
  providedIn: "root",
})
export class MapsService {

  directionsApi = inject(DirectionsApiClient)

  //Limites del mapa
  private _bounds = new mapboxgl.LngLatBounds();
  private _map?: Map;
  private _center: [number, number] = [-3.7672, 40.2291];

  get isMapReady() {
    return !!this._map;
  }

  public setMap(map: Map) {
    this._map = map;
    this._center = map.getCenter().toArray() as [number, number];
  }

  flyTo(location: LngLatLike) {
    console.log("flyTo", location);

    if (!this.isMapReady) throw new Error("Mapa no disponible");
    this._map?.flyTo({ zoom: 14, center: location });
    //Ajustar los limites del mapa
    this.fitBound(location);

    console.log(this._center, location);
    console.log(location);

    this.getRouteBetween(this._center, location);

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

  fitBound(location: LngLatLike) {
    this._bounds.extend(location);
    //Ajustar los limites del mapa
    this._map?.fitBounds(this._bounds, {
      padding: { top: 100, bottom: 100, left: 100, right: 100 },
    });
  }

  getRouteBetween(origin: LngLatLike, destination: LngLatLike) {
    return this.directionsApi.get<DirectionsResponse>(`/${origin.toString()};${destination.toString()}`, {})
      .subscribe((response) => {
        this.drawPolyline(response.routes[0]);

      });
  }

  private drawPolyline(route: Route) {
    console.log({ distance: route.distance, duration: route.duration / 60 });

    //Crear una ruta en el mapa para estas coordenadas
    if (!this.isMapReady) throw new Error("Mapa no disponible");

    // Remover la capa si ya existe
    if (this._map?.getLayer('myRouteLayer')) {
      this._map?.removeLayer('myRouteLayer');
    }

    // Remover la fuente si ya existe
    if (this._map?.getSource('myRouteLayer')) {
      this._map?.removeSource('myRouteLayer');
    }

    // Define the source data
    const geojson: GeoJSON = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route.geometry.coordinates
      }
    };

    this._map?.addLayer({
      id: 'myRouteLayer',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }

  constructor() { }
}
