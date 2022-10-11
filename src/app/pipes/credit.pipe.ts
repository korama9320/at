import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit',
})
export class CreditPipe implements PipeTransform {
  transform(value: string): string {
    let ans = [];
    for (let i = 0; i < value.length; i = i + 4) {
      ans.push(value.substring(i, i + 4));
    }
    return ans.join('-');
  }
}
