import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./product-page.component.html",
  styleUrl: "./product-page.component.scss",
})
export class ProductPageComponent {
  //Otra forma de injectar dependencias
  private fb = inject(FormBuilder);

  public color: string = "green";

  public myForm: FormGroup = this.fb.group({
    //El campo tendrá mas de una validacion
    name: [
      "",
      [Validators.required, Validators.minLength(6), Validators.email],
    ],
  });

  constructor() {}

  public changeColor(): void {
    //Color aleatorio en la variable color
    const color = Math.floor(Math.random() * 16777215).toString(16);
    this.color = `#${color}`;
  }
}
