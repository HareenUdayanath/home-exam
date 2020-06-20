import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectListFilter'
})
export class ObjectListFilterPipe implements PipeTransform {

  transform(items: any[], path: string, value: string): any {
    if (!items || !path) {
      return items;
    }
    return items.filter(item => !value || item[path] === value);

  }

}
