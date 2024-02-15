import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { canActivate, canMatch} from './auth/guards/auth.guard';
import { canActivatePublic, canMatchPublic} from './auth/guards/public.guard';


// dominio.com/
const routes: Routes = [
  { path: 'auth'
    , loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    , canActivate:[canActivatePublic]
    , canMatch: [canMatchPublic]

  },
  { path: 'heroes',
          loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
          canActivate: [canActivate], //!canActivate se usa para proteger rutas que NO son rutas hijas de otras rutas protegidas por un guard
          canMatch: [canMatch] //!canMatch se usa para proteger rutas que son rutas hijas de otras rutas protegidas por un guard
  },
  { path: '404', component: Error404PageComponent},
  { path: '', redirectTo: 'heroes', pathMatch: 'full'},
  { path: '**', redirectTo: '404'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
