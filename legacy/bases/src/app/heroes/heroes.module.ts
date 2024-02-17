import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

//NgModule decorator
@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HeroComponent,
    ListComponent
  ]

})

export class HeroesModule { }

