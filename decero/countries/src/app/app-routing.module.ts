import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import  { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [

  //{ path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },

  //LazyLoad
  {path:'countries', loadChildren: () => import('./countries/countries.module').then(m=> m.CountriesModule)},

  { path: '**', redirectTo: 'countries' },

];

const FAKE_SECRET = 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]

})

export class AppRoutingModule { }
