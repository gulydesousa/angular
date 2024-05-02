import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";
import {
  manufacturer,
  manufacturer_result,
} from "../interfaces/manufacturer.interfaces";
import { HttpClient } from "@angular/common/http";
import {
  make,
  make_result
} from "../interfaces/make.interfaces";
import { model, model_result } from "../interfaces/model.interfaces";

@Injectable({
  providedIn: "root",
})
export class VehiclesService {
  private apiBaseUrl: string = "https://vpic.nhtsa.dot.gov/api/vehicles/";

  constructor(private httpClient: HttpClient) { }

  //******************************************/
  //* MANUFACTURERS
  //* Obtiene la lista de fabricantes de vehículos
  //******************************************/
  get Manufacturers(): Observable<manufacturer[]> {
    const url = `${this.apiBaseUrl}GetAllManufacturers?format=json`;
    //Obtenemos el resultado de la petición
    //y lo mapeamos para obtener solo el array de manufacturers
    //si hay un error, se maneja con catchError
    const result: Observable<manufacturer[]> =
      this.httpClient.get<manufacturer_result>(url)
        //pipe es una función que permite encadenar operadores, en este caso map y catchError
        .pipe(
          //map transforma el resultado de la petición, obteniendo solo el array de manufacturers
          map((response: manufacturer_result) => response.Results),
          //tap permite realizar acciones sin modificar el flujo de datos
          //en este caso es un log de los resultados
          tap((response: manufacturer[]) => console.log('Manufacturers', response)),
          //catchError permite manejar errores en la petición,
          //el error puede venir de la petición: es decir del get o del map o tap
          catchError(error => {
            //console.error('Error en Manufacturers', error);
            //Retorna el observable de of, que emite un valor y luego se completa
            return of([]);
          }
          ));

    return result;
  }

  //******************************************/
  //* MAKES
  //* Obtiene la lista de modelos de un fabricante
  //******************************************/
  getMakesForManufacturer(manufacturer: string): Observable<make[]> {
    //Si no hay fabricante, retorna un observable de of con un array vacío
    if (!manufacturer) { return of([]); }

    const url = `${this.apiBaseUrl}GetMakeForManufacturer/${manufacturer}?format=json`;

    const result: Observable<make[]> =
      this.httpClient.get<make_result>(url)
        .pipe(
          map((response: make_result) => response.Results),
          tap((response: make[]) => console.log('Makes', response)),
          catchError(error => {
            //console.error('Error en Makes', error);
            //Retorna el observable de of, que emite un valor y luego se completa
            return of([]);
          }
          ));

    return result;
  }


  //******************************************/
  //* MODELS
  //* Obtiene la lista de modelos de una marca
  //******************************************/
  getModelsForMakeId(makeId: number): Observable<model[]> {
    //Si no hay makeId, retorna un observable de of con un array vacío
    if (!makeId) { return of([]); }

    const url = `${this.apiBaseUrl}GetModelsForMakeId/${makeId}?format=json`;

    const result: Observable<model[]> =
      this.httpClient.get<model_result>(url)
        .pipe(
          map((response: model_result) => response.Results),
          tap((response: model[]) => console.log('Models', response)),
          catchError(error => {
            //console.error('Error en Makes', error);
            //Retorna el observable de of, que emite un valor y luego se completa
            return of([]);
          }
          ));

    return result;
  }



}
