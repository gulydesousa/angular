import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicPageComponent } from './page/basic-page/basic-page.component';
import { NumbersPageComponent } from './page/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './page/uncommon-page/uncommon-page.component';
import { OrderPageComponent } from './page/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: BasicPageComponent },
  { path: 'numbers', component: NumbersPageComponent },
  { path: 'advanced', component: UncommonPageComponent },
  { path: 'custom', component: OrderPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
