import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
//NG02801: withFetch
import {  provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),//NG02801: withFetch
    provideClientHydration() //NG02801: withFetch
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
