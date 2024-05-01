import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})

//Centraliza los validadores personalizados
export class ValidatorsService {

  //Expresiones regulares para validacion de campos de texto
//Comprueba que el campo sea un nombre y apellido
public  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
//Comprueba el formato de un email
public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//Representa un validador personalizado
//Devuelve un objeto si la validacion falla
//El objeto contiene una propiedad que identifica el error
//Devuelve null si la validacion pasa
//Es sincrono porque no hace peticiones asincronas
//Lo vemos porque no tiene un callback ni un observable ni promesa
//Es una funcion que recibe un control y devuelve un objeto o null
public cantBeStrider = (control: FormControl): ValidationErrors | null=> {
  if (control.value?.toLowerCase() === 'strider')
  {
    return {cantBeStrider: true}
  }
  return null;
}

//Metodo para validar el campo de un formulario
//Recibe un formulario y un campo
//Devuelve un booleano o un null
//Si el campo es valido devuelve true
isValidField(form: FormGroup, field: string): boolean | null {
  //? Este metodo nos permite saber si un campo es valido
  const control = form.controls[field];
  return control && control.touched && control.errors != null;
}

  constructor() { }

}
