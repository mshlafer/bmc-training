import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmcUp'
})
export class BmcUpPipe implements PipeTransform {

  transform(value: string, char:string): string {
    return value.toUpperCase() + char;
  }

}
