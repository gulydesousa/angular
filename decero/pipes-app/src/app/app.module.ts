import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { AsteriscoPipe } from './pipes/asterisco.pipe';
registerLocaleData (localeEs);
registerLocaleData (localeFr);


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomseguroPipe,
    AsteriscoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
