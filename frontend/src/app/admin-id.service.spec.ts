import { TestBed } from '@angular/core/testing';

import { AdminIdService } from './admin-id.service';

describe('AdminIdService', () => {
  let service: AdminIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
