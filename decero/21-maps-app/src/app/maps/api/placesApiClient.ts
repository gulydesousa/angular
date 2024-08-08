import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable(
  { providedIn: 'root' }
)

// The PlacesApiClient class extends the HttpClient class
//and overrides the get method to prepend the base URL
//to the URL passed to the get method.
export class PlacesApiClient extends HttpClient {
  public baseUrl = 'https://api.mapbox.com/search/searchbox/v1';

  // The constructor of the PlacesApiClient class
  // calls the constructor of the HttpClient class.
  public constructor(handler: HttpHandler) {
    super(handler);
  }

  // The get method of the PlacesApiClient class
  //prepends the base URL to the URL passed to the get method
  public override get<T>(url: string
    , options: {
      params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
    }) {
    url = `${this.baseUrl}${url}`;

    //Enviamos la petición al servidor con el método get de la clase HttpClient.
    //ademas de la url, enviamos los parámetros limit, language, country y access_token.
    return super.get<T>(url, {
      params: {
        limit: 5,
        language: 'es',
        country: 'es',
        access_token: environment.mapbox_key,
        session_token: environment.session_token,
        ...options.params //Esto sirve para que se puedan añadir más parámetros a la petición.
      }
    });
  }
}
