import { Component, computed, inject, OnInit } from "@angular/core";
import { PlacesService } from "../services";


@Component({
  templateUrl: "./maps-layout.component.html",
  styleUrl: "./maps-layout.component.scss",
})
export class MapsLayoutComponent implements OnInit {
  private placesService = inject(PlacesService);

  public isLocationReady = computed<boolean>(() => this.placesService.isLocationReady());


  ngOnInit() {
    this.placesService.getUserLocation();
  }
}
