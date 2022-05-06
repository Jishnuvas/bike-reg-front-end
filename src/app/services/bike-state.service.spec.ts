import { TestBed } from '@angular/core/testing';

import { BikeStateService } from './bike-state.service';

describe('BikeStateService', () => {
  let service: BikeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
