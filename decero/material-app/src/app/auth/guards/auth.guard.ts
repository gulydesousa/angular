import { CanActivateFn, Router, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

const checkAuthentication = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication()
  //con este pipe se puede hacer algo cuando el observable emita un valor
  .pipe(
    //tap es un operador que permite ejecutar efectos secundarios en el flujo de datos
    //en este caso se usa para redirigir al usuario a la página de login si no está autenticado
    tap(isAuthenticated => {
      if (!isAuthenticated) {router.navigate(['./auth/login']);}
    }),
    tap(isAuthenticated => {console.log('isAuthenticated', isAuthenticated)})
  );
};

export const canActivate: CanActivateFn = () => {
  return checkAuthentication();
};

export const canMatch: CanMatchFn = () => {
  return checkAuthentication();
};
