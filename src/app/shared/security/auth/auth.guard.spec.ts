import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultsComponent } from '../../../modules/class/results/results.component';
import { ResultCalculationHelperService } from '../../../services/helpers/result-calculation-helper/result-calculation-helper.service';
import { ClassServiceHandlerService } from '../../../services/service-handler/class-service-handler/class-service-handler.service';
import { DateRangeFilterPipe } from '../../pipes/date-range-filter/date-range-filter.pipe';
import { AuthorizationService } from '../authorization/authorization.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        AuthorizationService
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
