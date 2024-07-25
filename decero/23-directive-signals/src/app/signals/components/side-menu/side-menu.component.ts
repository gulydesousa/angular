import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  selector: 'side-menu'
})

export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { title: 'Counter', route: 'counter' },
    { title: 'User Info', route: 'user-info' },
    { title: 'Properties', route: 'properties' },
  ];

}
