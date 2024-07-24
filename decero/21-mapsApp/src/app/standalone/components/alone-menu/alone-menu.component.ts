import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}


@Component({
  selector: 'alone-menu',
  standalone: true,
  templateUrl: './alone-menu.component.html',
  styleUrl: './alone-menu.component.scss',
  //Meter el commonModule en el imports
  imports: [CommonModule, RouterLink]
})

export class AloneMenuComponent {

  public menuItems: MenuItem[] = [
    { name: 'FullScreen' , route: '/maps/fullscreen' },
    { name: 'ZoomRange' , route: '/maps/zoom-range' },
    { name: 'Markers' , route: '/maps/markers' },
    { name: 'Houses' , route: '/maps/properties' },
    { name: 'Standalone' , route: '/standalone' },
  ];
}
