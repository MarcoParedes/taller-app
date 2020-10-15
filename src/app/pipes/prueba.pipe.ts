import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prueba'
})
export class PruebaPipe implements PipeTransform {

  transform(value: string, args: any): any {
    return " - " + value + args;
  }

}
