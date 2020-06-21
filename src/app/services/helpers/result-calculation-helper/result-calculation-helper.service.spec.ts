import { TestBed } from '@angular/core/testing';
import { Level } from '../../../shared/models/constant';

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

  it('check skill levels', () => {
      expect(service.getLevel(10)).toBe(Level.WEAK);
      expect(service.getLevel(65)).toBe(Level.OK);
      expect(service.getLevel(80)).toBe(Level.GOOD);
      expect(service.getLevel(95)).toBe(Level.EXCELLENT);
    }
  );

});
