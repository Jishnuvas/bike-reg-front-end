import { TestBed } from '@angular/core/testing';

import { TokenizeInterceptor } from './tokenize.interceptor';

describe('TokenizeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenizeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenizeInterceptor = TestBed.inject(TokenizeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
