import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 
  nombre:string = 'Capitán América';

  minombre:string = 'gUlY de sOUsA';
  activar: boolean = false;

  
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje:number = 0.236;
  salario:number=1234.5;
  fecha:Date= new Date();
  idioma: string= 'en';
  miVideo:string= 'https://assets.pinterest.com/ext/embed.html?id=690387817899758283';

  valorPromesa = new Promise<string>((resolve) =>{
    setTimeout(() => {
      resolve('llego la data')
    }, 4500);
  })

  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad: 500,
    direccion:{calle:'Primera',
    casa:666
    }
  }


  setIdioma(lang:string)
  {
    this.idioma = lang;
  }

}
