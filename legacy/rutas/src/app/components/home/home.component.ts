import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <p [appResaltado]="'orange'">Hola mundo desde APP.Component</p>
  <app-clases></app-clases>
  <app-ng-switch></app-ng-switch>
    `,
  styles: [
  ]
})

export class HomeComponent {

}
