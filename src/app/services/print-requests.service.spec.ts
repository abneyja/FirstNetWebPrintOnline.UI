import { TestBed } from '@angular/core/testing';

import { PrintRequestsService } from './print-requests.service';

describe('PrintRequestsService', () => {
  let service: PrintRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
