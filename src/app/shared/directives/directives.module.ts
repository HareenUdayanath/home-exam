import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxElementDirective } from './box-element/box-element.directive';

@NgModule({
  declarations: [
    BoxElementDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxElementDirective
  ]
})
export class DirectivesModule {}
