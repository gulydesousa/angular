import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';


@NgModule({
  declarations: [
    MenuComponent,
    DomSeguroPipe
  ],
  imports: [
    CommonModule,

    PrimeNgModule
  ],
  exports:[
    MenuComponent
  ]

})
export class SharedModule { }
