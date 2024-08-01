import { Component, computed, inject, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  templateUrl: "./dashboard-layout.component.html",
  styleUrl: "./dashboard-layout.component.scss",
})
export class DashboardLayoutComponent implements OnInit {
  ngOnInit(): void {
    console.log("DashboardLayoutComponent");
    console.log(this.user());
  }

  private authService = inject(AuthService);
  // !Solo lectura
  public user = computed(() => this.authService.currentUser());

  //Implementar metodo logout
  public logout() {
    this.authService.logout();
  }
}
