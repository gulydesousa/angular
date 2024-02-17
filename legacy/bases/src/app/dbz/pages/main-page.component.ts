import { Component } from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: dbzService) { }


  get characters(): Character[] {
    //?El spread operator es para que no se pueda modificar el arreglo original
    return [...this.dbzService.characters];
  }

  onDeleteItem(id: string) {
    this.dbzService.onDeleteItem(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }


}
