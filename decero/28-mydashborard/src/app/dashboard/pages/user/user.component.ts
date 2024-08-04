import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { switchMap } from "rxjs";
import { TitleComponent } from "@shared/title/title.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { UsersService } from "@services/users.service";

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: "./user.component.html",
  styles: ``,
})

export class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);


  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }

    return 'Información del usuario';
  });

}
