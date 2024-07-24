import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "maps",
    loadChildren: () => import("./maps/maps.module").then((m) => m.MapsModule),
  },

  {
    //Lazy loading porque no se necesita cargar el componente de inmediato
    //Se carga solo cuando se navega a la ruta
    //No se esta importando en ninguo otro sitio aparte de este archivo donde se hace la carga perezosa
    path: "standalone",
    loadComponent: () =>
      import("./standalone/pages/alone-page/alone-page.component").then(
        (m) => m.AlonePageComponent
      ),
  },

  {
    path: "**",
    redirectTo: "maps",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
