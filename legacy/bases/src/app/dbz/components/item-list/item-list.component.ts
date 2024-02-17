import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { dbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent {
  @Input ()
  public character: Character = {} as Character;

  @Input  ()
  public index: number = 0;

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(): void {
    console.log('deleteCharacter');
    this.onDeleteCharacter.emit(this.character.id??'');
  }


}
