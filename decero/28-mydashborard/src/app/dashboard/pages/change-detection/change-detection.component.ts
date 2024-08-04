import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush se usa para que
  // El componente solo se actualice si cambian las propiedades de entrada
  // En este caso las propiedades de entrada son las señales y propiedades computadas
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent, JsonPipe],
  templateUrl: './change-detection.component.html',
  styles: ``
})

export class ChangeDetectionComponent {

  // Señal reactiva
  public frameworkAsSignal = signal({name: 'Angular', version: 12});
  // Propiedad computada
  public currentFw = computed(() => this.frameworkAsSignal());


  //Propiedad  tradicional
  public frameworkAsProperty = {name: 'Angular', version: 18};

  constructor() {
    setTimeout(() => {
      //Como se esta usando ChangeDetectionStrategy.OnPush, el componente no se actualizara
      //ya que no se esta cambiando ninguna propiedad de entrada
      //Si se descomenta la siguiente linea, el componente se actualizara ya que se esta cambiando
      //la propiedad de entrada frameworkAsSignal

      //this.frameworkAsSignal .update(value => ({...value, name: 'NetCore', version: 8}));
      this.frameworkAsProperty = {name: 'React', version: 10};
      console.log('ChangeDetectionComponent constructor');
      console.log('Nuevo valor de frameworkAsProperty:', this.frameworkAsProperty);
    }, 3000);

  }
}
