import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WizzardComponent } from './components/wizzard/wizzard.component';
import { WizzardFinishedComponent } from './components/wizzard-finished/wizzard-finished.component';


const routes: Routes = [{
  path: '',
  component: LayoutPageComponent,
  children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'wizzard-finished', component: WizzardFinishedComponent},
      { path: 'wizzard', component: WizzardComponent },
      { path: '**', component: WelcomeComponent }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
