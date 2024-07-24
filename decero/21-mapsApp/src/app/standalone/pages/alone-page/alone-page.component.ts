import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AloneComponent } from '../../components/alone-component/alone-component.component';
import { AloneMenuComponent } from '../../components/alone-menu/alone-menu.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CommonModule, AloneComponent, AloneMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.scss'
})
export class AlonePageComponent {

}
