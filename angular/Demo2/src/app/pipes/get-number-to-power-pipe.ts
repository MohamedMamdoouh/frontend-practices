import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getNumberToPower',
})
export class GetNumberToPowerPipe implements PipeTransform {
  transform(value: number, power: number = 2): number {
    return Math.pow(value, power);
  }
}
