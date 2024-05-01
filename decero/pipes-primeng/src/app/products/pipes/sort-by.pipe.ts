import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes:Hero[], sortBy?:keyof Hero | ''): Hero[] {

    console.log({sortBy, heroes})
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => a.name.localeCompare(b.name));
      case 'canfly':
        return heroes.sort((a, b) => a.canfly === b.canfly ? 0 : a.canfly ? -1 : 1);
      case 'color':
        return heroes.sort((a, b) => a.color - b.color);
      default:
        return heroes;

    }

  }

}
