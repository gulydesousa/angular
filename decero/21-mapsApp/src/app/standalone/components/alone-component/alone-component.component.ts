import { Component, Input } from '@angular/core';

@Component({
  selector: 'alone-component',
  standalone: true,
  imports: [],
  templateUrl: './alone-component.component.html',
  styleUrl: './alone-component.component.scss'
})
export class AloneComponent{

  @Input()
  public counter: number = 1;

  //increment the counter
  increment() {
    this.counter++;
  }

}
