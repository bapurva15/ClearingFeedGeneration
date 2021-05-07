import { TestBed } from '@angular/core/testing';

import { ClearTransactionsService } from './clear-transactions.service';

describe('ClearTransactionsService', () => {
  let service: ClearTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClearTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
