import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public edadClicked:boolean  = false;
  public nombreClicked:boolean  = false;

  public nombre: string = 'ironman';
  public edad: number = 45;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }


  public obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  public cambiarNombre(): void {
    this.nombre = this.nombre==='Spiderman'?  'ironman' : 'Spiderman';

    this.nombreClicked  = true;
  }

  public cambiarEdad(): void {
    this.edad = this.edad===30?  45 : 30;
    this.edadClicked  = true;
  }

  public reestablecer(): void {

    this.nombreClicked  = false;
    this.edadClicked  = false;

    document.querySelectorAll('h1')!.forEach( (elemento) => {
      elemento.innerHTML = '<h1>Desde Angular</h1>';
    });
  }
}
