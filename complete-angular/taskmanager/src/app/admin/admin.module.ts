import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { DashboardService } from '../services/dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  providers: [DashboardService]
})


export class AdminModule {

}
