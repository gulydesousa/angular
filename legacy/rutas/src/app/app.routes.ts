import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

/*
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
*/

const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent},
{path: 'usuario/:id', component: UsuarioComponent,
 children: USUARIO_ROUTES
 /*  children: [
    {path: 'detalle', component: UsuarioDetalleComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'nuevo', component: UsuarioNuevoComponent},
    {path: '**', pathMatch:'full', redirectTo:'nuevo'}
 ]*/
},

{path: '**', pathMatch:'full', redirectTo:'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
