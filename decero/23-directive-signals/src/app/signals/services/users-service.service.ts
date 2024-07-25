import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http = inject(HttpClient);
  private url = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    //Consultamos la API con el id del usuario
    return this.http.get<SingleUserResponse>(`${this.url}/${id}`)
    //Extraemos la data del response en un observable del tipo User
    //Y con tap imprimimos el resultado en consola-es un efecto secundario-
    .pipe(map(response => response.data), tap(console.log));
  }
}
