import { Component, effect, input, output } from '@angular/core';
import { Producto } from '@interfaces/producto.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {

  // @Input({required:true})
  // public product!: Producto;

  public product = input.required<Producto>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().cantidad + 1);
  }


  //El efecto se ejecutará cada vez que cambie el producto
  //Se mostrará en consola el nombre
  public loggingEffect = effect(() => {
    console.log(this.product().nombre);
  });

}
