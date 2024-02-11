import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizzardComponent } from './profile/components/wizzard/wizzard.component';

const routes: Routes = [{ path: 'wizzard', component: WizzardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
