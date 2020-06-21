import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserServiceHandlerService } from '../user-service-handler/user-service-handler.service';

import { ClassServiceHandlerService } from './class-service-handler.service';

describe('ClassServiceHandlerService', () => {
  let service: ClassServiceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClassServiceHandlerService]
    });
    service = TestBed.inject(ClassServiceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
