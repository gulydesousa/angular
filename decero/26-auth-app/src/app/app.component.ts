import { Component, computed, effect, inject } from "@angular/core";
import { AuthService } from "./auth/services/auth.service";
import { AuthStatus } from "./auth/enums";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "26-auth-app";

  private authService = inject(AuthService);

  private router = inject(Router);

  //* Variable que se encarga de verificar si el usuario ya termino de autenticarse
  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() == AuthStatus.Checking) {
      return false;
    }
    return true;
  });


  //* This effect will run whenever the authStatus changes
  public authStatusChangeEffect = effect(() => {
    console.log("Auth status changed to: ", this.authService.authStatus());

    switch (this.authService.authStatus()) {
      case AuthStatus.Authenticated:
        console.log("User is authenticated");
        this.router.navigateByUrl("/dashboard");
        break;
      case AuthStatus.Unauthenticated:
        console.log("User is not authenticated");
        this.router.navigateByUrl("/auth/login");
        break;
      case AuthStatus.Checking:
        console.log("Checking user auth status");
        break;
    }
  });

}
