import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClassStore } from '../../resources/class-store';
import { ResultCalculationHelperService } from '../../services/helpers/result-calculation-helper/result-calculation-helper.service';
import { ServiceHandlerModule } from '../../services/service-handler/service-handler.module';
import { BarChartModule } from '../../shared/components/bar-chart/bar-chart.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

import { ClassRoutingModule } from './class-routing.module';
import { ResultsComponent } from './results/results.component';
import { ResultTableComponent } from './result-table/result-table.component';

@NgModule({
  declarations: [
    ResultsComponent,
    ResultTableComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    ServiceHandlerModule,
    BarChartModule,
    PipesModule,
    HttpClientInMemoryWebApiModule.forRoot(ClassStore)
  ],
  providers: [
    ResultCalculationHelperService
  ]
})
export class ClassModule {}
