import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';

const routes: Routes = [
{
  path: '',
  //Este estilo de rutas hijas se utiliza cuando se quiere
  //tener una ruta padre que no tiene una URL asociada.
  //En este caso, la ruta padre es /reactive.
  //La ruta padre tiene un componente que se muestra en la pantalla.
  //Las rutas hijas se definen dentro de la propiedad children de la ruta padre.
  children: [
    {path: 'basic', component: BasicPageComponent},
    {path: 'dynamic', component: DynamicPageComponent},
    {path: 'switches', component: SwitchesPageComponent},
    {path: '**', redirectTo: 'basic'}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
