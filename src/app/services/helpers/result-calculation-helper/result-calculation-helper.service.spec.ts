import { TestBed } from '@angular/core/testing';

import { ResultCalculationHelperService } from './result-calculation-helper.service';

describe('ResultCalculationHelperService', () => {
  let service: ResultCalculationHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultCalculationHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
