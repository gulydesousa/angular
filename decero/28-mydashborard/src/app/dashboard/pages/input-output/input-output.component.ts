import { Component, OnDestroy, signal } from "@angular/core";
import { TitleComponent } from "@shared/title/title.component";
import { ProductCardComponent } from "./ui/product-card/product-card.component";
import { Producto } from "@interfaces/producto.interface";
import { interval, take, tap } from "rxjs";

@Component({
  selector: "app-input-output",
  standalone: true,
  imports: [TitleComponent, ProductCardComponent],
  templateUrl: "./input-output.component.html",
  styles: ``,
})
export class InputOutputComponent implements OnDestroy {

  updateProduct(product: Producto, cantidad: number): void {
    //Se actualiza la cantidad del producto
    this.products.update((products) =>
      //Se recorre el arreglo de productos,
      //si el id del producto es igual al id del producto que se quiere actualizar
      //map es para crear un nuevo arreglo con los productos actualizados
      //El parametro p es el producto que se está recorriendo
      //Si el id del producto es igual al id del producto que se quiere actualizar
      //Se retorna un nuevo objeto con la cantidad actualizada
      //Si no, se retorna el mismo producto
      products.map((p) => (p.id === product.id ? { ...p, cantidad } : p))
    );
  }

  public products = signal<Producto[]>([
    { id: 1, nombre: "Producto 1", cantidad: 10 },
    { id: 2, nombre: "Producto 2", cantidad: 20 },
    { id: 3, nombre: "Producto 3", cantidad: 30 },
  ]);

  //Se disparará un evento cada segundo, agregando un nuevo producto al arreglo de productos
  //hasta llegar a 7 productos
  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.products.update((products) => [
          ...products,
          {
            id: products.length + 1,
            nombre: `Producto ${products.length + 1}`,
            cantidad: 0,
          },
        ]);
      }),
      take(7)
    )
    .subscribe(); //Se suscribe al observable inmediatamente

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
