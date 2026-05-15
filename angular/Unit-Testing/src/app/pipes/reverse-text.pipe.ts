import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText',
  standalone: true,
})
export class ReverseTextPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return (value ?? '').split('').reverse().join('');
  }
}