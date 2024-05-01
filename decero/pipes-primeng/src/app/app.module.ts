import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeEs from "@angular/common/locales/es";
import localeFr from "@angular/common/locales/fr-CA";

registerLocaleData(localeEs, "es");
registerLocaleData(localeFr, "fr-CA");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: "es-ES"}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
