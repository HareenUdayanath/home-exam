import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../../directives/directives.module';
import { BarChartComponent } from './bar-chart.component';



@NgModule({
  declarations: [BarChartComponent],
  exports: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ]
})
export class BarChartModule { }
