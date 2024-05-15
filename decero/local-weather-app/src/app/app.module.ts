import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
// Import provideHttpClient and withFetch
import {  provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CitySearchComponent } from './city-search/city-search.component';
import { MaterialModule } from './material/material.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        // Enable fetch for HttpClient
        provideHttpClient(withFetch()),
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CitySearchComponent,
        FlexLayoutModule,
        FlexLayoutServerModule,
        MaterialModule,

    ]
})
export class AppModule { }
