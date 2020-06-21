import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRangeFilter'
})
export class DateRangeFilterPipe implements PipeTransform {

  transform(items: any[], from: Date, to: Date) {

    if (!from || !to) {
      return items;
    }

    return items.filter(item => {
      const dateStringArr = item.date.split('/').map(str => Number(str));
      const date = new Date(dateStringArr[2], dateStringArr[1] - 1, dateStringArr[0]);
      return date >= from && date <= to;
    });

  }

}
