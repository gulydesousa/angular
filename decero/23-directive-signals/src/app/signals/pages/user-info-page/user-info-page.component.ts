import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { UsersServiceService } from "../../services/users-service.service";
import { User } from "../../interfaces/user-request.interface";

@Component({
  templateUrl: "./user-info-page.component.html",
  styleUrl: "./user-info-page.component.scss",
})
export class UserInfoPageComponent implements OnInit {
  //Injeccion de dependencias
  private usersService = inject(UsersServiceService);

  //*Signals
  public userId = signal<number>(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal<boolean>(false);

  //*Propiedad computed para el nombre completo
  public fullName = computed<string>(() => {
    if (!this.currentUser()) return "";

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.currentUser.set(undefined);

    this.userId.set(id);

    //Hacemos la peticion al servicio
    this.usersService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },
    });
  }
}
