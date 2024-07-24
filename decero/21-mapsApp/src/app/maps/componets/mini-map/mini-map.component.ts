import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";

import { Map, Marker} from "mapbox-gl";

@Component({
  selector: "mini-map",
  templateUrl: "./mini-map.component.html",
  styleUrl: "./mini-map.component.scss",
})

export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number] = [0, 0];
  @ViewChild("map") divMap?: ElementRef;

  public map?: Map;
  
  ngAfterViewInit() {
    if( !this.divMap?.nativeElement ) throw "Map Div not found";
    if( !this.lngLat ) throw "LngLat can't be null";

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom: 15,
      interactive: false
    });

    new Marker()
      .setLngLat( this.lngLat )
      .addTo( map )

  }
}
