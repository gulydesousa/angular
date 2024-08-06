import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  standalone: true,
  imports: [MatListModule],
  templateUrl: './options-bottom-sheet.component.html',
  styles: ``
})
export class OptionsBottomSheetComponent {

  openLink(event: MouseEvent): void {
    console.log('The link was clicked.');
  }
}
