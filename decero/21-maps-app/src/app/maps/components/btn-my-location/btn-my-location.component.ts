import { Component, computed, inject } from "@angular/core";
import { MapsService } from "../../services/maps.service";
import { PlacesService } from "../../services";

@Component({
  selector: "app-btn-my-location",
  templateUrl: "./btn-my-location.component.html",
  styleUrl: "./btn-my-location.component.scss",
})
export class BtnMyLocationComponent {
  private mapsService = inject(MapsService);
  private placesService = inject(PlacesService);

  goToMyLocation(): void {
    if (!this.placesService.isLocationReady()) {
      throw new Error("Ubicación no disponible");
    }

    if (!this.mapsService.isMapReady) {
      throw new Error("Mapa no disponible");
    }

    this.mapsService.flyTo(this.placesService.userLocation!);
  }
}
