import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Directive({
  selector: "[customLabel]",
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;

  private _color: string = "black";
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set error(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrors();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log("CustomLabelDirective initialized");
    this.setStyle();
  }

  setStyle() {
    if (this.htmlElement) {
      this.htmlElement.nativeElement.style.color = this._color;
    }
  }

  setErrors() {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = "";
      return;
    }

    const errors = Object.keys(this._errors as Object);

    if (errors.includes("required"))
      this.htmlElement.nativeElement.innerHTML = "Campo requerido";
    else if (errors.includes("minlength"))
    {
      const min = (this._errors as any).minlength.requiredLength;
      const current = (this._errors as any).minlength.actualLength;

      this.htmlElement.nativeElement.innerHTML = `Mínimo ${current} /${min} caracteres`;
    }
    else if (errors.includes("email"))
      this.htmlElement.nativeElement.innerHTML = "Correo invalido";
    else
      this.htmlElement.nativeElement.innerHTML = "Error desconocido";
  }
}
