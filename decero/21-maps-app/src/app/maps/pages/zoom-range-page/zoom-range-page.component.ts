import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';
@Component({
  selector: 'zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})

export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

    //Recuperamos #map del html
    @ViewChild('map') divMap?: ElementRef;

    public zoomLevel: number = 10;
    public map?: Map;
    public currentCenter: LngLat = new LngLat(-3.7672, 40.2291);

    ngAfterViewInit(): void {
      console.log(this.divMap);

      if(typeof document === 'undefined' || !this.divMap)
        throw new Error('No se pudo cargar el mapa');

      try{
      this.map = new Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: this.currentCenter,
        zoom: this.zoomLevel
      });
      this.mapListener(this.map);
    }
    catch(e){
      console.log(e);
    }
  }

  //Map Listener que recupera el zoom del mapa
  //!Estos listeners hay que destruirlos con el componente usando ngOnDestroy
  mapListener(map: Map | undefined) {
    if (!map) {
      console.error('El objeto map no existe.');
      return;
    }

    try {
      // Aquí va el código que utiliza el objeto map
      map.on('zoom', (ev) => {
        console.log ('Zoom:', ev); //Imprime el evento de zoom
        this.zoomLevel = map!.getZoom();
      });

      map.on('zoomend', (ev) => {
        //Cuando terminamos de hacer zoom preguntamos si el zoom es menor a 18
        if(this.map!.getZoom()<18) return;
        this.map!.zoomTo(18); //Si es mayor a 18 hacemos zoom a 18

        console.log('Zoom End:', map!.getZoom());
      });

      map.on('move', (ev) => {
        const target = ev.target;
        this.currentCenter = target.getCenter();
      });

    } catch (error) {
      console.error('Error al interactuar con el mapa:', error);
    }
  }

  //!Aqui destruimos el mapa con los listeners
  ngOnDestroy(): void {
    this.map?.remove();
  }


  zoomOut(){
    this.map?.zoomOut();
  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomCambio(valor: string){
    this.zoomLevel = Number(valor);
    this.map?.zoomTo(this.zoomLevel);
  }



}





