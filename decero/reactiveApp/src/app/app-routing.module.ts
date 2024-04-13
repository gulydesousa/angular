import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
//Cada ruta tiene un path y un loadChildren.
//El path es la URL que se debe escribir en el navegador para acceder a la ruta.
//El loadChildren es una función que devuelve un módulo de Angular.
//Lo que hace es importar el módulo de Angular que se encuentra en la ruta especificada.
//En este caso, el módulo ReactiveModule se encuentra en la ruta ./reactive/reactive.module.
//Por lo tanto, la función importará el módulo ReactiveModule y lo devolverá.
//Cuando se accede a la ruta /reactive, se carga el módulo ReactiveModule.

  path: 'reactive',
  loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule )
},

{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)
},

{
  //Esta ruta ** es una ruta comodín.
  //Cuando se accede a una URL que no coincide con ninguna de las rutas definidas,
  //se redirige a la ruta comodín.
  //En este caso, se redirige a la ruta /reactive.
  path: '**',
  redirectTo: 'reactive'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
