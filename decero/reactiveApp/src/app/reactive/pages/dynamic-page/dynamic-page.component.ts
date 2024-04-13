import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required], []],
      ['Death Stranding', [Validators.required], []],
      ])


  });

  public newFavorite: FormControl =
  this.fb.control('', [Validators.required], []);

  constructor(private fb: FormBuilder) { }

  onDelete(index: number): void {
    //Usamos el getter que creamos para obtener el array de juegos favoritos
    //Como todos los valores se pasan por referencia, al modificar el array, se modifica el formulario
    //Por lo que se actualiza automaticamente
    //removeAt elimina el elemento en la posición index
    this.favoriteGames.removeAt(index);
  }

  onSubmit() : void{
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    //Reseteamos el formulario incluso el array de juegos favoritos
    this.myForm.controls['favoriteGames'] = this.fb.array([]);

    this.myForm.reset();
  }


  onAddToFavorite(): void{
    if (this.newFavorite.invalid)  return;

    const newGame = this.newFavorite.value;
    //Agregamos un nuevo control al array de juegos favoritos
    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required], [])
    );

    //Reseteamos el control al estado inicial: pristine, untouched y sin valor
    this.newFavorite.reset();
  }

  get favoriteGames(): FormArray {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
        //? Este metodo nos permite saber si un campo es valido
        const control = formArray.controls[index];
        return control && control.touched && control.errors != null;
  }

  isValidField(field: string): boolean | null {
    //? Este metodo nos permite saber si un campo es valido
    const control = this.myForm.controls[field];
    return control && control.touched &&  control.errors != null;
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

}
