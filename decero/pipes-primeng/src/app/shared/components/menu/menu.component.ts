import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})

export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.menuItems=[

      {
        label:'Pipes de Angular',
        icon:'pi pi-desktop',
        items: [
          {label:'Textos y Fechas', icon:'pi  pi-align-left', routerLink:'/'},
          {label:'Números', icon:'pi pi-dollar', routerLink:'numbers'},
          {label:'No Comunes', icon:'pi pi-globe', routerLink:'advanced'}]
        },

        { label:'Pipes Personalizados', icon:'pi pi-cog',
          items:[
            {label:'Custom Pipes', icon:'pi pi-cog', routerLink:'custom'},

          ]
        }
    ];
  }

  public menuItems:MenuItem[]=[];
}
