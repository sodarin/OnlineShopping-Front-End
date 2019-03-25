import { TestBed } from '@angular/core/testing';

import { EarphoneService } from './earphone.service';

describe('EarphoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EarphoneService = TestBed.get(EarphoneService);
    expect(service).toBeTruthy();
  });
});
