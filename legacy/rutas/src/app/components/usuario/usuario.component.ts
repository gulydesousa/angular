import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, ContentChildDecorator, AfterViewInit, AfterContentChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit, OnChanges, DoCheck
, AfterContentInit, AfterContentChecked
, AfterViewInit, AfterContentChecked, OnDestroy {

  constructor(){console.log('constructor');}
  ngOnInit(){console.log('ngOnInit');}
  ngOnChanges(){console.log('ngOnChanges');}
  ngDoCheck(){console.log('ngDoCheck');}
  ngAfterContentInit(){console.log('ngAfterContentInit');}
  AfterContentChecked(){console.log('AfterContentChecked');}
  ngAfterViewInit(){console.log('ngAfterViewInit');}
  ngAfterContentChecked(){console.log('ngAfterContentChecked');}
  ngOnDestroy(){console.log('ngOnDestroy');}
  

}
