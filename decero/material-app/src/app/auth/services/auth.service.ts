import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthService {
  private url = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;

    //structuredclone es una funcion que clona un objeto en uno nuevo
    //se diferencia de la original por que es un nuevo objeto
    //con las mismas propiedades y valores pero no es el mismo objeto
    //No retornamos el objeto original para evitar que se modifique
    //porque en javascript los objetos se pasan por referencia y no por valor
    //por lo que si se modifica el objeto original se modificaria tambien
    //el objeto que se esta retornando en el componente que lo esta utilizando
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {

    //http.post('login', {email, password})

    return this.http.get<User>(`${this.url}/users/1`)
      .pipe(
        //tap es un operador que permite ejecutar codigo sin modificar el flujo de datos
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', user.id.toString()))
      );
  }


  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }


  checkAuthentication(): Observable<boolean> {
    console.log('checkAuthentication');
    if (typeof localStorage === 'undefined')
      return of(false);

    if (!localStorage.getItem('token'))
      return of(false); //of es un operador que crea un observable con un valor inicial

    const token = localStorage.getItem('token');


    //1. Hacer una peticion al servidor para verificar si el token es valido
    //2. Si el token es valido retornar true
    //3. Si el token no es valido retornar false
    //4. Si la peticion falla retornar false
    return this.http.get<User>(`${this.url}/users/${token}`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),//!user es true si user es undefined o null
        //!!user es false si user es undefined o null
        //Entonces aqui !!user es true si user es un objeto
        catchError(() => of(false))
      );
  }
}
