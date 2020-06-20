import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListFilterPipe } from './object-list-filter/object-list-filter.pipe';
import { DateRangeFilterPipe } from './date-range-filter/date-range-filter.pipe';
import { DateToStringPipe } from './date-to-string/date-to-string.pipe';

@NgModule({
  declarations: [
    ObjectListFilterPipe,
    DateRangeFilterPipe,
    DateToStringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObjectListFilterPipe,
    DateRangeFilterPipe,
    DateToStringPipe
  ]
})
export class PipesModule {}
