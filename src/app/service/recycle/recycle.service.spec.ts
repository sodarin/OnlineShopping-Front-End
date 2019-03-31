import { TestBed } from '@angular/core/testing';

import { RecycleService } from './recycle.service';

describe('RecycleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecycleService = TestBed.get(RecycleService);
    expect(service).toBeTruthy();
  });
});
