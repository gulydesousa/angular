import { Injectable } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from "@angular/forms";
import { Observable, Subscriber, delay, of } from "rxjs";

//Si lo proveemos en el root, lo podremos inyectar en cualquier parte de la aplicación
@Injectable({ providedIn: "root" })
export class EmailValidatorService implements AsyncValidator {
  constructor() {}

  validate(
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    //Debemos retornar un observable
    //Si el email es valido, retornamos null
    //Si no es valido, retornamos un objeto con el error

    //Simulamos una petición asincrona
    //Retorna emailTaken: true si el email ya está en uso
    //Por lo tanto, el email no es valido
    //return of({emailTaken: true}).pipe(delay(2000));

    //?Vamos a crearnos un Observable para simular una petición http asincrona
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log("Inicio de la petición");
        console.log(email);
        if (email === "gdesousa@gmail.com") {
          subscriber.next({ emailTaken: true });
          subscriber.complete();

        } else {
          subscriber.next(null);
          subscriber.complete();
        }
      }
    ).pipe(delay(2000));

    return httpCallObservable;

    //!Asi sería si estuvieramos haciendo una petición http realla a un servidor
    //! .pipe(
    //!   map( resp => {
    //!    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    //!    return (resp.length === 0) ? null : {emailTaken: true}
    //!  })
    //!);
  }

  registerOnValidatorChange?(fn: () => void): void {}
}
