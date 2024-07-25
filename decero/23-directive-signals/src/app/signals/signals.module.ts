import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SignalMenuComponent } from './components/signal-menu/signal-menu.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent,
    SignalMenuComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ],

})
export class SignalsModule { }
