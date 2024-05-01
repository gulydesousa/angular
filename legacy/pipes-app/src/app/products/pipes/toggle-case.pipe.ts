import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase'
})

export class ToogleCasePipe implements PipeTransform {

  transform(value: any, toupper:boolean=false): string {

    if(toupper){
      return value.toUpperCase();
    }
    else
    {
      return value.toLowerCase();
    }

  }
}
