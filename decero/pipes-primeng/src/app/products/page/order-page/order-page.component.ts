import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styles: ``
})

export class OrderPageComponent {

  public isUpperCase: boolean = false;
  public sortBy: keyof Hero | ''= '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canfly: true,
      color: Color.Blue
    },
    {
      name: 'Batman',
      canfly: false,
      color: Color.Black
    },
    {
      name: 'Robin',
      canfly: false,
      color: Color.Green
    },
    {
      name: 'Daredevil',
      canfly: false,
      color: Color.Red
    },
    {
      name: 'Flash',
      canfly: false,
      color: Color.Yellow
    }
  ];


  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero | ''): void {
    this.sortBy = value;
  }
}
