import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SelectorPageComponent},
      { path: '**', redirectTo: ''}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VehiclesRoutingModule { }
