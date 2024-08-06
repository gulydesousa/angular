import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  public userLocation?: [number, number];

  private _isLocationReady = signal<boolean>(false);
  public isLocationReady = computed(() => this._isLocationReady());

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        //Callback de éxito
        ({ coords }) => {
          setTimeout(() => {
          //Este es el orden de las coordenadas en Mapbox
          this.userLocation = [coords.longitude, coords.latitude];
          this._isLocationReady.set(true);
          console.log("Ubicación del usuario obtenida", this.userLocation);
          resolve(this.userLocation)}, 2000); // Retraso de 2 segundos;
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
}
