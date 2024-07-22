import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import {Map} from 'mapbox-gl';

@Component({
  selector: 'full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.scss'
})
export class FullScreenPageComponent implements AfterViewInit {

  //Recuperamos #map del html
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.divMap);

    if(!this.divMap)throw new Error('No se pudo cargar el mapa');

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.0066, 40.7135],
      zoom: 15
    });


  }
}
