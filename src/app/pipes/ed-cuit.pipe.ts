import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edCuit'
})
export class EdCuitPipe implements PipeTransform {

  transform(ncuit: number): string {
    const vl = String(ncuit).padStart(11,' ');
    return `${vl.slice(0,2)}-${vl.slice(2,10)}-${vl.slice(10,11)}`;
  }

}
