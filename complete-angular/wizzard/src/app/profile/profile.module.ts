import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WizzardComponent } from './components/wizzard/wizzard.component';
import { WizzardFinishedComponent } from './components/wizzard-finished/wizzard-finished.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

import { ProfileRoutingModule } from './profile-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  declarations: [
    ContactDetailsComponent,
    PersonalDetailsComponent,
    SkillsComponent,
    WelcomeComponent,
    WizzardFinishedComponent,
    WizzardComponent,
    WorkExperienceComponent,
    LayoutPageComponent
  ],
  providers: [],
})
export class ProfileModule { }
