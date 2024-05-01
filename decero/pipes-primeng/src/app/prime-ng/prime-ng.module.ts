import { NgModule } from '@angular/core';

import { ButtonModule}  from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from "primeng/ripple";
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],

  providers:[
    //MessageService
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,

  ],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    RippleModule,
    TableModule,
    ToolbarModule,
  ]
})

export class PrimeNgModule { }
