import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './profile/components/welcome/welcome.component';
import { MaterialModule } from './material/material.module';
import { WizzardComponent } from './profile/components/wizzard/wizzard.component';
import { PersonalDetailsComponent } from './profile/components/personal-details/personal-details.component';
import { ContactDetailsComponent } from './profile/components/contact-details/contact-details.component';
import { SkillsComponent } from './profile/components/skills/skills.component';
import { WorkExperienceComponent } from './profile/components/work-experience/work-experience.component';
import { WizzardFinishedComponent } from './profile/components/wizzard-finished/wizzard-finished.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WizzardComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    WizzardFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
