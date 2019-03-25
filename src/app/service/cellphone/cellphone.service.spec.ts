import { TestBed } from '@angular/core/testing';

import { CellphoneService } from './cellphone.service';

describe('CellphoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CellphoneService = TestBed.get(CellphoneService);
    expect(service).toBeTruthy();
  });
});
