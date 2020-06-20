import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListFilterPipe } from './object-list-filter/object-list-filter.pipe';

@NgModule({
  declarations: [
    ObjectListFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObjectListFilterPipe
  ]
})
export class PipesModule {}
