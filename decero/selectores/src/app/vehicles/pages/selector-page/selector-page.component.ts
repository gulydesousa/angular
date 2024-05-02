import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehiclesService } from '../../services/vehicles.service';
import { manufacturer } from '../../interfaces/manufacturer.interfaces';
import { make } from '../../interfaces/make.interfaces';
import { map, switchMap, tap } from 'rxjs';
import { model } from '../../interfaces/model.interfaces';

@Component({
  templateUrl: './selector-page.component.html',
  styles: ``
})
/* The SelectorPageComponent class in TypeScript defines a form group with form controls for
manufacturers, make, and model, and retrieves manufacturers data from a service. */
export class SelectorPageComponent implements OnInit {

  //FormGroup is a class that tracks the value and validity state of a group of FormControl instances.
  public myForm: FormGroup = this.formBuilder.group({
    manufacturer: ['', Validators.required],
    make: ['', Validators.required],
    model: ['', Validators.required]
  });


  //Todos (top-100) los fabricantes
  public manufacturers: manufacturer[] | undefined;
  //Todos los marcas de un fabricante
  public makes: make[] = [];
  //Todos los modelos de una marca
  public models: model[] = [];

  constructor(private formBuilder: FormBuilder,
    private vehiclesService: VehiclesService) { }

  ngOnInit(): void {
    this.onInitializate();
    this.onManufacturerChanged();
    this.onMakeChanged();
  }

  onInitializate(): void {
    this.vehiclesService.Manufacturers.subscribe(manufacturers => {
      this.manufacturers = manufacturers;
      //Ordenar por commnon name alfabeticamente
      this.manufacturers?.sort((a, b) => (a.Mfr_Name).localeCompare(b.Mfr_Name));
    });
  }

  onManufacturerChanged(): void {
    //Necesitamos un listener que detecte que ha cambiado el fabricante
    //para obtener los modelos de ese fabricante
    this.myForm.get('manufacturer')?.valueChanges
    //pipe es una función que permite encadenar operadores
    .pipe(
      //Antes de hacer nada necesitamos que el modelo sea la opción por defecto
      //reset limpia el valor del control
      tap(() => this.myForm.get('make')?.reset('')),
      //switchMap cancela la subscripción anterior y se suscribe a la nueva
      //en este caso, se suscribe a la petición de los modelos de un fabricante
       switchMap(manufacturer => this.vehiclesService.getMakesForManufacturer(manufacturer)),
      //map transforma el resultado de la petición, ordenando alfabeticamente
      map(makes => makes.sort((a, b) => (a.Make_Name).localeCompare(b.Make_Name)))
    )
    //subscribe se suscribe al observable
    .subscribe(makes => {this.makes = makes;});
    //Esto lo que hace es que cada vez que cambie el fabricante, se obtienen los modelos de ese fabricante
    //y se muestran en el select de modelos
  }

  onMakeChanged(): void {
    this.myForm.get('make')?.valueChanges
    .pipe(
      tap(() => this.myForm.get('model')?.reset('')),
      switchMap(makeId => this.vehiclesService.getModelsForMakeId(makeId)),
      map(models => models.sort((a, b) => (a.Model_Name).localeCompare(b.Model_Name)))
    )
    .subscribe(models => {this.models = models;});
  }

}
