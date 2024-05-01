import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisco'
})
export class AsteriscoPipe implements PipeTransform {

  transform(value: string, mostrar:boolean=true): unknown {
    return mostrar?value:'*'.repeat(value.length);
  }

}
