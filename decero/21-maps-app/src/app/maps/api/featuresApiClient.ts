import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable(
  { providedIn: 'root' }
)

//La clase FeaturesApiClient extiende de HttpClient
//para poder hacer peticiones al servidor.
//En el constructor se llama al constructor de la clase HttpClient.
//Se define la propiedad baseUrl con la url de la API de Mapbox.
export class FeaturesApiClient extends HttpClient {
  public baseUrl = ' https://api.mapbox.com/search/searchbox/v1/retrieve/';

  // The constructor of the PlacesApiClient class
  // calls the constructor of the HttpClient class.
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
        access_token: environment.mapbox_key,
        session_token: environment.session_token,
        ...options.params //Esto sirve para que se puedan añadir más parámetros a la petición.
      }
    });
  }
}
