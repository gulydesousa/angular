import { User, UserResponse, UsersResponse } from "@interfaces/index";
import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { State } from "@interfaces/index";
import { delay, first, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private http = inject(HttpClient);

  //#state significa que es una propiedad privada,
  //visible unicamente dentro de nuestro servicio
  //El numeral significa que la transpilacion
  //crea una propiedad privada con nombre state
  //En javascript se crea una propiedad privada con nombre _state
  // que no se puede acceder desde fuera de la clase
  #state = signal<State>({
    users: [],
    loading: true,
  });

  //Señales que se puede acceder desde fuera de la clase
  //Solo lectura
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>("https://reqres.in/api/users")
      .pipe(delay(2000)) //esperamos intencionadamente 2 segundos
      .subscribe((response) => {
        console.log(response); // Agregar console.log para ver el resultado del servicio
        this.#state.set({
          users: response.data,
          loading: false,
        });
      });
  }

  //Método para obtener un usuario por id
  //No se usa subscribe, se usa pipe y map
  getUserById(id: number): Observable<User> {
    return this.http.get<UsersResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500), // Esperar 1.5 segundos intencionalmente
        map(response => Array.isArray(response.data) ? response.data[0] : response.data),
        first() // Asegurarse de que solo se emita el primer elemento
      );
  }

}
