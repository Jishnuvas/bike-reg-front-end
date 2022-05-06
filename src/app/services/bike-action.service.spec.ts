import { TestBed } from '@angular/core/testing';

import { BikeActionService } from './bike-action.service';

describe('BikeActionService', () => {
  let service: BikeActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
