import { Component } from "@angular/core";
import { TitleComponent } from "@shared/title/title.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

import { OptionsBottomSheetComponent }
from "./ui/options-bottom-sheet/options-bottom-sheet.component";

@Component({
  standalone: true,
  imports: [
    TitleComponent,
    MatSlideToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  templateUrl: "./material.component.html",
  styles: ``,
})
export class MaterialComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(OptionsBottomSheetComponent);
  }
}
