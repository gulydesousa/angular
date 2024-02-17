import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public deletedItem: string | undefined = undefined;

  public heroNames: string[] =
  ['Superman', 'Batman'
  , 'Spiderman', 'Ironman'
  , 'Thor'];

  public Borrar():void
  {
    //delete last  element in array
    this.deletedItem = this.heroNames.pop();
  }
}
