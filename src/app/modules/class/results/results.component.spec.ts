import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultCalculationHelperService } from '../../../services/helpers/result-calculation-helper/result-calculation-helper.service';
import { ClassServiceHandlerService } from '../../../services/service-handler/class-service-handler/class-service-handler.service';
import { DateRangeFilterPipe } from '../../../shared/pipes/date-range-filter/date-range-filter.pipe';
import { PipesModule } from '../../../shared/pipes/pipes.module';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PipesModule
      ],
      declarations: [ResultsComponent],
      providers: [
        ClassServiceHandlerService,
        ResultCalculationHelperService,
        DateRangeFilterPipe,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
