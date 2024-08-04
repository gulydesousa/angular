import { Component, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TitleComponent } from "@shared/title/title.component";
import { UsersService } from "@services/users.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule, CommonModule],
  templateUrl: "./users.component.html",
  styles: ``,
})
export class UsersComponent {
  public usersService = inject(UsersService);
  public http = inject(HttpClient);
}
