import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformVowels'
})
export class TransformVowelsPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const defaultTrans = ['@', '3', '!', '0', 'ü'];
    if (args.length === 0) args = defaultTrans;
    if (args.length < 5) {
      args = args.concat(defaultTrans.slice(-args.length + 1));
    }
    if (args.length > 5) {
      args = args.slice(0, 5);
    }
    return value
    .replace(/(a)/g, args[0])
    .replace(/(e)/g, args[1])
    .replace(/(i)/g, args[2])
    .replace(/(o)/g, args[3])
    .replace(/(u)/g, args[4]);
  }

}
