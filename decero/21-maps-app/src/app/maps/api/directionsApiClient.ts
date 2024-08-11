import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable(
  { providedIn: 'root' }
)


export class DirectionsApiClient extends HttpClient {
  public baseUrl = ' https://api.mapbox.com/directions/v5/mapbox/walking';


  public constructor(handler: HttpHandler) {
    super(handler);
  }


  public override get<T>(mapid: string
    , options: {
      params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
    }) {
    const url:string = `${this.baseUrl}${mapid}`;

    //Enviamos la petición al servidor con el método get de la clase HttpClient.
    //ademas de la url, enviamos los parámetros limit, language, country y access_token.
    return super.get<T>(url, {
      params: {
        alternatives: 'false',
        continue_straight: 'true',
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: 'true',
        access_token: environment.mapbox_key,
        ...options.params //Esto sirve para que se puedan añadir más parámetros a la petición.
      }
    });
  }
}
