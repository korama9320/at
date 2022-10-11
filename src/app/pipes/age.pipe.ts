import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: string): number {
    let dob = value.substring(1, 7);
    let dobb = [];
    for (let i = 0; i < dob.length; i = i + 2) {
      dobb.push(dob.substring(i, i + 2));
    }
    dobb = dobb.reverse();

    dob = dobb.join('/');
    let d = new Date().getFullYear();
    let i = new Date(dob).getFullYear();

    return d - i;
  }
}
