import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, delay, of } from "rxjs";

//Si lo proveemos en el root, lo podremos inyectar en cualquier parte de la aplicación
@Injectable({providedIn: 'root'})

export class EmailValidatorService implements AsyncValidator {
  constructor() { }

  validate(control: AbstractControl<any, any>)
  : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    const email = control.value;
    console.log(email);
    //Debemos retornar un observable
    //Si el email es valido, retornamos null
    //Si no es valido, retornamos un objeto con el error

    //Simulamos una petición asincrona
    //Retorna emailTaken: true si el email ya está en uso
    //Por lo tanto, el email no es valido
    return of({emailTaken: true}).pipe(delay(2000));

  }

  registerOnValidatorChange?(fn: () => void): void {}

}
