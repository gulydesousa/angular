import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
      ng-style works!
    </p>
    <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
      <i class="fa fa-plus"></i>
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent {
  
  tamanio:number = 20;
}
