import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})

export class SwitchesPageComponent implements OnInit{

  //Create the form with the FormBuilder service
  public myForm: FormGroup = this.fb.group({
    //Uno por cada campo del formulario y la validación que se le va a aplicar
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  public person = {
    gender:'F',
    notifications: false,
  }

  //Inject the FormBuilder service para crear el formulario
  constructor(private fb: FormBuilder) { }

  //ngOnInit function to initialize the component
  //Imaginemos que hay una API que nos devuelve
  //un objeto con los datos de la persona
  ngOnInit(): void {
    //Reset the form with the person object
    this.myForm.reset(this.person);
  }

  //ngOnSubmit function to submit the form
  public onSave() {
    //Check if the form is invalid
    //If the form is invalid, mark all the fields as touched
    //Esto se hace para que se muestren los errores en los campos
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    //terms es una propiedad del formulario, no de la person,
    //por lo que no se debería enviar dentro el objeto person.
    //Esta linea de código nos permite separar
    //los términos de los demás campos
    //Por lo que tendremos un objeto con los términos
    //y otro con los demás campos
    const{terms, ...rest} = this.myForm.value;
    //Save the form value in the person object
    this.person = rest;

    //Print the form value and the person object
    console.log(this.myForm.value);
    console.log(this.person);
  }

  isValidField(field: string): boolean | null {
    //? Este metodo nos permite saber si un campo es valido
    const control = this.myForm.controls[field];
    return control && control.touched && control.errors != null;
  }
}
