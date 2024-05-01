import { Component } from "@angular/core";

@Component({
  selector: "products-basic-page",
  templateUrl: "./basic-page.component.html",
  styleUrl: "./basic-page.component.css",
})

export class BasicPageComponent {
  public uppercase: string = "basic uppercase";
  public lowercase: string  = "BASIC LOWERCASE";
  public titlecase: string  = "baSIc tITle";

  public idioma: string= 'es';

  public customDate: Date = new Date();


  public setIdioma(lang:string)
  {
    this.idioma = lang;
  }
}
