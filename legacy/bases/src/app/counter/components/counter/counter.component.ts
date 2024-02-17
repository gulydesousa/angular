import  { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent {


  public counter: number = 100;

  public increaseBy(value:number):void{
    this.counter=   this.counter + value;
  }

  public reset():void{
    this.counter=0;
  }



}
