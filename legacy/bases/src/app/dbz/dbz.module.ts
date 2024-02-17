import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ItemListComponent } from './components/item-list/item-list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
    ItemListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports : [
    MainPageComponent
  ]
})
export class DbzModule { }
