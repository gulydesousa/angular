import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehiclesModule { }
