import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule]
})

export class ConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Hero) {}

}
