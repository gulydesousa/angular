import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./pages/product/product.component";

//! Enrutamiento Angular, específicamente para un módulo llamado products.
//! Define las rutas dentro del módulo de productos utilizando la estructura de datos Routes
//! Routes es un array de objetos que representan rutas individuales.
const routes: Routes = [
  {
    //? La ruta raíz de este módulo se redirige a la ruta /product.
    path: "",
    //? Es un array de objetos que representan rutas que derivan de la ruta raíz.
    children: [
      //? Cuando la ruta es /product, se carga el componente ProductComponent.
      { path: "product", component: ProductComponent },
      //? Cuando la ruta no coincide con ninguna de las rutas definidas.
      { path: "**", component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
