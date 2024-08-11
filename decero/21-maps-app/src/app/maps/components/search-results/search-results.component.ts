import { Component, effect, inject, Input } from "@angular/core";
import { PlacesService, MapsService } from "../../services";
import {  Suggestion,
} from "../../interfaces/places-response.interface";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrl: "./search-results.component.scss",
})
export class SearchResultsComponent {

  private placesService = inject(PlacesService);
  private mapsService = inject(MapsService);

  public selectedId: string = '';

  public get places(): Suggestion[] {
    return this.placesService.places;
  }

  public get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
  }

  //Metodo para volar a la ubicación seleccionada
  public flyTo(place: Suggestion) {
    this.selectedId = place.mapbox_id;
    this.placesService.pickLocation(place.mapbox_id);
  }


  //Signal para la localizacion seleccionada
  //Selecciona la ubicación en el mapa para hacer el flyTo
  public locationSelectedEffect = effect(() => {
    console.log("locationSelectedEffect", this.placesService.features);
    try {
      const features = this.placesService.features();
      if (features.length > 0) {

        const lng = features[0].properties.coordinates.longitude;
        const lat = features[0].properties.coordinates.latitude
        const name = features[0].properties.name;
        const address = features[0].properties.address;

        //Creamos un marcador en el mapa
        this.mapsService.addMarker(
          [lng, lat],
          `<h6>${name}</h6><span>${address}</span>`
        );

        this.mapsService.flyTo([lng, lat]);
      }
    } catch (e) {
      console.error(e);
    }
  });
}
