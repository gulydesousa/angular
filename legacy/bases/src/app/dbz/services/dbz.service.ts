import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})

export class dbzService {


  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 5000
    }
  ];


  onNewCharacter(character: Character): void {
    //character.id = uuid();
    //this.characters.push(character);
    //??No es buena idea modificar el objeto que nos pasan como parámetro
    const newCharacter: Character = {...character, id: uuid()};
    this.characters.push(newCharacter);
  }

  onDeleteItem(id: string): void {
    console.log('delete');
    this.characters = this.characters.filter(char => char.id !== id);

  }


  constructor() { }

}
