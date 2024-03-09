import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},

  {path: "dashboard", component: DashboardComponent},
  {path: "", redirectTo: "/dashboard", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
