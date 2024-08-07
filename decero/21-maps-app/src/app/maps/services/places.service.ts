import { computed, inject, Injectable, signal } from "@angular/core";
import { PlacesApiClient, FeaturesApiClient } from "./../api";
import {
  Feature, FeatureResponse, PlacesResponse, Suggestion,
} from "../interfaces/places-response.interface";

@Injectable({
  providedIn: "root",
})

export class PlacesService {
  private http = inject(PlacesApiClient);
  private httpFeature = inject(FeaturesApiClient);

  public userLocation?: [number, number];

  private _isLocationReady = signal<boolean>(false);
  public isLocationReady = computed(() => this._isLocationReady());

  public isLoadingPlaces: boolean = false;
  public places: Suggestion[] = [];

  //Señal para emitir los lugares encontrados
  public features = signal<Feature[]>([]);

  public async getUserLocation(): Promise<[number, number]> {
    if (typeof navigator == "undefined" || !navigator.geolocation)
      return Promise.reject("navigator.geolocation no está disponible");

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        //Callback de éxito
        ({ coords }) => {
          setTimeout(() => {
            //Este es el orden de las coordenadas en Mapbox
            this.userLocation = [coords.longitude, coords.latitude];
            this._isLocationReady.set(true);
            console.log("Ubicación del usuario obtenida", this.userLocation);
            resolve(this.userLocation);
          }, 2000); // Retraso de 2 segundos;
        },
        //Callback de error
        (error) => {
          alert("No se pudo obtener la ubicación del usuario");
          console.error(error);
          reject();
        }
      );
    });
  }

  //Metodo para llamar la API de Mapbox que busca lugares
  async searchPlace(query: string = "") {
    if (query.length === 0) {
      this.features.set([]);
      this.isLoadingPlaces = false;
      this._isLocationReady.set(true);
      this.places = [];
      console.error("Query vacío");
      return;
    }

    if (!this.userLocation) {
      console.error("No hay user location");
      return;
    }

    this.isLoadingPlaces = true;
    const url = `/suggest?q=${query}`;
    const params = { params: { proximity: this.userLocation?.join(",") } };

    this.http.get<PlacesResponse>(url, params).subscribe((response) => {
      console.log(response.suggestions);
      this.places = response.suggestions;
      this.isLoadingPlaces = false;
    });
  }

  //Metodo para llamar la API de Mapbox que busca lugares
  async pickLocation(mapid: string = "") {

    if (!this.userLocation) {
      console.error("No hay user location");
      return;
    }

    this.isLoadingPlaces = true;
    const params = { params: {} };

    this.httpFeature.get<FeatureResponse>(mapid, params).subscribe((response) => {
      console.log(response.features);
      this.features.set(response.features);
      this.isLoadingPlaces = false;
    });
  }
}
