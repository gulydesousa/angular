import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './pages/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { XssExampleComponent } from './vulnerabilidad/xss-example-component/xss-example-component.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    XssExampleComponent],

  imports: [CommonModule, RouterModule, FormsModule],

  exports: [HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent],
})
export class SharedModule { }
