import { TestBed } from '@angular/core/testing';

import { UserServiceHandlerService } from './user-service-handler.service';

describe('UserServiceHandlerService', () => {
  let service: UserServiceHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
