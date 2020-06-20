import { TestBed } from '@angular/core/testing';

import { ClassServiceHandlerService } from './class-service-handler.service';

describe('ClassServiceHandlerService', () => {
  let service: ClassServiceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassServiceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
