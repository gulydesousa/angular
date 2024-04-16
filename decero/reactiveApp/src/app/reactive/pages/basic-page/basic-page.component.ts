import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

const rtx5090 = {
  name: "RTX 5090",
  price: 2500,
  inStorage: 6,
};


@Component({
  templateUrl: "./basic-page.component.html",
  styles: [],
})

export class BasicPageComponent implements OnInit {

  /*
  public myForm: FormGroup = new FormGroup({
    // FormControl(name: string
    //          , validators: ValidatorFn | ValidatorFn[] | null = []
    //          , asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null = [])
    // nombre, validaciones sincronas, validaciones asincronas
    name: new FormControl("", [], []),
    price: new FormControl(0, [], []),
    inStorage: new FormControl(0, [], []),
  });

*/

  // Para crear el mismo formulario que arriba pero con FormBuilder
  // FormBuilder: Es una clase que nos permite crear formularios de manera más sencilla
  // y rápida. Se importa de @angular/forms
  // Primero tenemos que injectar el FormBuilder en el constructor
  // Luego creamos el formulario con el método group del FormBuilder
  public myForm: FormGroup = this.fb.group(
    {
      //name, sync validators, async validators
      //Los validators son funciones que se ejecutan cuando se cambia el valor del campo
      //Puede sen uno o varios validadores, de ahi que sea un array
      //Todos deben cumplirse para que el campo sea valido

      //?Hacer esto no significa automaticamente que el formulario no será posteado si no es valido
      //?El onSubmit del formulario debe tener una validación para que no se envie si no es valido

      name: ["", [Validators.required, Validators.minLength(3)], []],
      price: [0, [Validators.required, Validators.min(0)], []],
      inStorage: [0, [Validators.required, Validators.min(0)], []],
    }
  )

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    //this.myForm.reset(rtx5090);
  }

  isValidField(field: string): boolean | null {
    //? Este metodo nos permite saber si un campo es valido
    const control = this.myForm.controls[field];
    return control && control.touched && control.errors != null;
  }

  getFieldError(field: string): string | null {
    //? Este metodo nos permite saber el error de un campo
    //? Si no hay error, retorna null
    //? Si hay error, retorna el mensaje de error
    //? Si hay mas de un error, retorna el primero que encuentre

    const control = this.myForm.controls[field];
    if (!control) return null;

    const errors = control.errors;
    if (!errors) return null;

    for (const key of Object.keys(errors)) {
      switch (key) {
        case "required":
          return "Este campo es requerido";
        case "minlength":
          return `El campo debe tener al menos ${errors[key].requiredLength} caracteres`;
        case "min":
          return `El valor mínimo es ${errors[key].min}`;
        default:
          return "Valor inválido";
      }
    }

    return null;
  }



  onSave(): void {

    //?Con esta validación evitamos que el formulario se envie si no es valido
    if (this.myForm.invalid) {
      //*Con esto marcamos todos los campos como tocados
      //*De esta manera se muestran los mensajes de error al enviar el formulario
      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.myForm.value);

    //?Para resetear el formulario
    //Se puede enviar un objeto con los valores que se quieren resetear
    //El nombre de los campos debe ser el mismo que el nombre del campo en el formulario
    this.myForm.reset({ price: 0, inStorage: 0 });
  }
}
