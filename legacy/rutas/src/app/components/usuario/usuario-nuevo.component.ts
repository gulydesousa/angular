import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent {
  constructor (private router:ActivatedRoute)
  {
    //Parametros enviados desde el padre
    this.router?.parent?.params.subscribe (parametros =>{
      console.log("params", parametros);
    })
  }
}
