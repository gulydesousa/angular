import { HttpClient, HttpHeaders } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { CheckTokenResponse, LoginResponse, User } from "../interfaces";
import { AuthStatus } from "../enums";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;
  private httpOptions = inject(HttpClient);

  //! Son privadas las señales
  //! No queremos permitir que se editen desde fuera de la clase
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.Checking);

  //! Exponemos al mundo exterior el usuario actual y el estado de autenticacion
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.httpOptions.post<LoginResponse>(url, body).pipe(
      //*Resultado OK
      map(({ user, token }) => this.setAuthenticated(user, token)),
      //!Resultado KO
      catchError((err) => {
        console.error(err);
        return throwError(() => err.error.message);
      })
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`;

    const token = localStorage.getItem("token");

    if (!token) {
      //No estamos autenticados porque no hay token
      //Tenemos que cambiar el estado a no-autenticado
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);

    return this.httpOptions
      .get<CheckTokenResponse>(url, { headers })
      .pipe(
        //*Resultado OK
        map(({ token, user }) => this.setAuthenticated(user, token)),
        //!En caso de error
        catchError(() => {
          this._authStatus.set(AuthStatus.Unauthenticated);
          return of(false);
        })
      );
  }

  logout(): void {
    localStorage.removeItem("token");
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.Unauthenticated);
  }

  private setAuthenticated(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.Authenticated);
    // Guardamos el token en el local storage
    localStorage.setItem("token", token);

    return true;
  }

  // Se verifica si el usuario esta autenticado
  constructor() {
    this.checkAuthStatus().subscribe();
  }
}
