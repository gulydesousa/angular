import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

import * as mapboxgl from 'mapbox-gl';
import { AloneComponent } from '../standalone/components/alone-component/alone-component.component';
import { AloneMenuComponent } from '../standalone/components/alone-menu/alone-menu.component';
import { environment } from '../../environments/environment';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from '../standalone/components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

(mapboxgl as any).config.ACCESS_TOKEN = environment.mapbox_key;
//console.log('mapbox_key', environment.mapbox_key);

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    ZoomRangePageComponent,
    PropertiesPageComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    SearchBarComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    AloneComponent,
    AloneMenuComponent,
    AngularLogoComponent
]
})

export class MapsModule { }
