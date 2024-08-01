import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { AuthStatus } from "../enums";

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log({ status: authService.authStatus() });

  if (authService.authStatus() === AuthStatus.Authenticated) {
    //redirect to login solo cuando esta autenticado
    router.navigate(["/dashboard"]);
    return false;
  }

  return true;
};
