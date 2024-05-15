import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [],

  exports: [MatButtonModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            MatToolbarModule,
            MatSlideToggleModule,
            MatCardModule],
})
export class MaterialModule {}
