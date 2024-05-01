import { FormControl, ValidationErrors } from "@angular/forms";


//Expresiones regulares para validacion de campos de texto
//Comprueba que el campo sea un nombre y apellido
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
//Comprueba el formato de un email
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//Representa un validador personalizado
//Devuelve un objeto si la validacion falla
//El objeto contiene una propiedad que identifica el error
//Devuelve null si la validacion pasa
//Es sincrono porque no hace peticiones asincronas
//Lo vemos porque no tiene un callback ni un observable ni promesa
//Es una funcion que recibe un control y devuelve un objeto o null
export const cantBeStrider = (control: FormControl): ValidationErrors | null=> {
  if (control.value?.toLowerCase() === 'strider')
  {
    return {cantBeStrider: true}
  }
  return null;
}
