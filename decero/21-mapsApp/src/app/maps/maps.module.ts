import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './componets/mini-map/mini-map.component';
import { SideMenuComponent } from './componets/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).config.ACCESS_TOKEN =
'pk.eyJ1IjoiZ2Rlc291c2EiLCJhIjoiY2x5eDU0cXgxMXdodzJpcWw5aWpuYXF5YiJ9.i3jKEur4NEOyBSZco1EjIQ';


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    ZoomRangePageComponent,
    PropertiesPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
