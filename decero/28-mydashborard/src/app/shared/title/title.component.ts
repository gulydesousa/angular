import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {
  //Quiero que sea un input para que pueda ser modificado desde el componente padre
  //Por defecto no esta inicializado y tiene que enviarse siempre desde el que lo usa
  @Input({required:true}) title!: string ;

  @Input({transform:booleanAttribute}) withShadow:boolean = false;

}
