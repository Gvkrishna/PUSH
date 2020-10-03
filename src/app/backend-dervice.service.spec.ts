import { TestBed } from '@angular/core/testing';

import { BackendDerviceService } from './backend-dervice.service';

describe('BackendDerviceService', () => {
  let service: BackendDerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendDerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
