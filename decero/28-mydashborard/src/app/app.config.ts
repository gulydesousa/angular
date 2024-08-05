import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withViewTransitions } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        onViewTransitionCreated: (transitionInfo) => {
          //Para mostrar la información de la transición en la consola
          //y poder ver los datos que se están pasando dentro del objeto transitionInfo
          console.dir(transitionInfo, { depth: null });
        },
      })
    ),

    //* DEPRECATED
    //importProvidersFrom(HttpClientModule)
    provideHttpClient(withInterceptorsFromDi())
  ],
};
