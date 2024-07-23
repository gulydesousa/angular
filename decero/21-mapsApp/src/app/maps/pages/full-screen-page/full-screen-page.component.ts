import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import {Map} from 'mapbox-gl';

@Component({
  selector: 'full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.scss']
})
export class FullScreenPageComponent implements AfterViewInit {

  //Recuperamos #map del html
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.divMap);

    if(typeof document === 'undefined' || !this.divMap)
      throw new Error('No se pudo cargar el mapa');

    try{
    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.0066, 40.7135],
      zoom: 15
    });
  }
  catch(e){
    console.log(e);
  }

  }
}
