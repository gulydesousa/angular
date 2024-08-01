import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../enums';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // console.log('isAuthenticatedGuard');
  // console.log({route, state});
  // console.log(state.url);
  // const url = state.url;
  // localStorage.setItem('redirectUrl', url);

  const authService   = inject(AuthService);
  const router       = inject(Router);

  console.log({status: authService.authStatus()});

  if (authService.authStatus() === AuthStatus.Authenticated) {
    return true;
  }

  //if auth is still checking
  if (authService.authStatus() === AuthStatus.Checking) {
    return false;
  }

  //redirect to login solo cuando no esta autenticado
  router.navigate(['/auth/login']);
  return false;

};
