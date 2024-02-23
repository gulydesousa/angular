import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of, catchError, map, delay, tap } from "rxjs";
import { Country } from "../interfaces/country-interface";
import { CacheStore } from "../interfaces/cache-store.interface";
import { Region } from "../interfaces/region.type";

@Injectable({ providedIn: "root" })
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1/";

  public cacheStore: CacheStore = {
    byCapital: {
      term: "",
      data: [],
    },
    byRegion: {
      term: undefined,
      data: [],
    },
    byCountry: {
      term: "",
      data: [],
    },
  } as CacheStore;

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem("cacheStore", JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    if (localStorage.getItem("cacheStore")) {
      this.cacheStore = JSON.parse(
        localStorage.getItem("cacheStore")!
      ) as CacheStore;
    }
  }

  searchCountryByCode(term: string): Observable<Country | null> {
    const url = `${this.apiUrl}alpha/${term}`;

    return this.httpClient
      .get<Country[]>(url)

      .pipe(
        map((countries) => (countries.length > 0 ? countries[0] : null)),
        catchError((err) => of(null))
      );
  }

  /*
  searchCountryByCode(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}alpha/${term}`;

    return this.httpClient.get<Country[]>(url)

      .pipe(
        catchError(err => {
          console.log("searchCountryByCode: error en el catchError", err);
          return of([]);
        })
      );
  }
  */

  private search(term: string, action: string): Observable<Country[]> {
    //Verificamos que la accion sea permitida
    const allowedActions = ["name", "capital", "region"];
    if (!allowedActions.includes(action)) {
      throw new Error(
        `La accion ${action} no esta permitida, las acciones permitidas son: ${allowedActions.join(
          ", "
        )}`
      );
    }

    const url = `${this.apiUrl}${action}/${term}`;
    return this.httpClient
      .get<Country[]>(url)

      .pipe(
        catchError((err) => {
          console.log(`${action}: error en el catchError`, err);
          return of([]);
        })
        //delay(3000)
      );
  }

  searchRegion(term: string): Observable<Country[]> {
    return this.search(term, "region").pipe(
      tap((countries) => {
        this.cacheStore.byRegion = {
          term: term as Region | undefined,
          data: countries,
        };
      }),
      tap(() => this.saveToLocalStorage())

    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.search(term, "name").pipe(
      tap((countries) => {
        this.cacheStore.byCountry = { term, data: countries };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.search(term, "capital").pipe(
      tap(
        (countries) => (this.cacheStore.byCapital = { term, data: countries })
      ),
      tap(() => this.saveToLocalStorage())
    );

    /*
    .pipe(
      // tap(countries => countries.map(country => console.log("tap1", country))),
      // tap(countries => countries.map(country => console.log("tap1", country))),
      map(countries => []),
      tap(countries => console.log("tap2", countries)),
    );
  */
  }
}
