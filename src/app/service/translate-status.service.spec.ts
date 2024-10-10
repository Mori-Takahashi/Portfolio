import { TestBed } from '@angular/core/testing';

import { TranslateStatusService } from './translate-status.service';

describe('TranslateStatusService', () => {
  let service: TranslateStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
