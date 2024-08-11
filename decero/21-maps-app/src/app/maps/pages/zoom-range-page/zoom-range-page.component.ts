import { AfterViewInit, Component, computed, effect, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker, Popup } from 'mapbox-gl';
import { MapsService, PlacesService } from '../../services';
@Component({
  selector: 'zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})

export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  private placesService = inject(PlacesService);
  private mapService = inject(MapsService);
  public isLocationReady = computed<boolean>(() => this.placesService.isLocationReady());

  //Recuperamos #map del html
  @ViewChild('map') divMap?: ElementRef;

  public zoomLevel: number = 10;
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-3.7672, 40.2291);

  ngAfterViewInit(): void {
    if (typeof window == 'undefined' || typeof navigator == 'undefined') return;

    if (typeof document === 'undefined' || !this.divMap)
      throw new Error('No se pudo cargar el mapa');

    try {
      this.map = new Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: this.currentCenter,
        zoom: this.zoomLevel
      });
      this.mapListener(this.map);
    }
    catch (e) {
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
        //console.log('Zoom:', ev); //Imprime el evento de zoom
        this.zoomLevel = map!.getZoom();
      });

      map.on('zoomend', (ev) => {
        //Cuando terminamos de hacer zoom preguntamos si el zoom es menor a 18
        if (this.map!.getZoom() < 14) return;
        this.map!.zoomTo(14); //Si es mayor a 18 hacemos zoom a 18

        //console.log('Zoom End:', map!.getZoom());
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


  zoomOut() {
    this.map?.zoomOut();
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomCambio(valor: string) {
    this.zoomLevel = Number(valor);
    this.map?.zoomTo(this.zoomLevel);
  }



  //Efecto para mostrar la ubicación del usuario
  //Se ejecuta cada vez que cambia el valor de isLocationReady
  public posicionInicial = effect(() => {

    if (!this.isLocationReady()) return;

    //Si la ubicación del usuario está lista recentramos el mapa
    console.log("Centrando mapa en ubicación del usuario");
    this.map?.setCenter(this.placesService.userLocation!);

    //Establecer los limites del mapa
    this.mapService.fitBound(this.placesService.userLocation!);

    //Popup
    const popup = new Popup()
      .setHTML(`
              <h6>Aquí estoy</h6>
              <span>Este es mi lugar en el mundo</span>
              `);

    //Marcador
    const marker = new Marker({ color: "red" })
      .setLngLat(this.placesService.userLocation!)
      .setPopup(popup)
      .addTo(this.map!);

    //MapService
    this.mapService.setMap(this.map!);

  });
}





