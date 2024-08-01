import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

import Swal from "sweetalert2";


@Component({
  selector: "app-login-page", // Añadir un selector único
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  private fb           = inject(FormBuilder);
  private authService  = inject(AuthService);
  private router       = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigateByUrl("/dashboard");
      },
      error: (err) => {
        Swal.fire("Error", err, "error");
      },
    });
  }
}
