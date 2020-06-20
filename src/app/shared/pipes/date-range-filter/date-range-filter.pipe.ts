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
      const date = new Date(item.date);
      return date >= from && date <= to;
    });

  }

}
