import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Path to the lazy loaded module
    // The path is relative to the root path defined in the app-routing.module.ts
    // Cuando se navega a la ruta /selector, se carga el módulo CountriesModule
    // que contiene el componente SelectorPageComponent
    // El módulo CountriesModule se carga de forma lazy
    path: 'selector',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    // Si se navega a una ruta que no existe, se redirige a la ruta /selector
    path: '**',
    redirectTo: 'selector'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
