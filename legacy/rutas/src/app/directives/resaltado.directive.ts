import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor?:string;
  
  @HostListener ('mouseenter')  mouseEntro(){
    //si el color es undefined se pone en amarllo
    this.resaltar(this.nuevoColor ||"yellow");
  }

  @HostListener ('mouseleave')  mouseLeave(){

    this.resaltar(null);
  }


  constructor(private er:ElementRef) { 
    this.er.nativeElement.style.backgroundColor="yellow";
  }

  private resaltar (color:string | null)
  {
    this.er.nativeElement.style.backgroundColor=color;
  }  
}
