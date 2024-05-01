import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

//import { cantBeStrider } from 'src/app/shared/validators/validators';
//import * as customValidators from '../../../shared/validators/validators';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})

export class RegisterPageComponent {
  //Validador del nombre con expresion regular
  myForm = this.fb.group({
    name : ['',[Validators.required
              , Validators.minLength(3)
              , Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],

    //Validador con expresion regular personalizada
    email : ['',[Validators.required
              , Validators.pattern(this.validatorsService.emailPattern)]
              , [this.emailValidator]],

    //Validador personalizado: nombre de la funcion en validators.ts
    username : ['',[Validators.required
                  , Validators.minLength(3)
                  , this.validatorsService.cantBeStrider]],

    password : ['',[Validators.required, Validators.minLength(6)]],
    password2 : ['',[Validators.required, Validators.minLength(6)]],

  });


  isValidField(field: string): boolean | null {
    //Servicio de validacion de campos
    return this.validatorsService.isValidField(this.myForm, field);
  }


  constructor(private fb: FormBuilder,
              private validatorsService: ValidatorsService,
              private emailValidator: EmailValidatorService)
  { }

  onSubmit(){
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }
}
