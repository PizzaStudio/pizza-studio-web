import { TestBed } from '@angular/core/testing';

import { StudioInterceptor } from './studio.interceptor';

describe('StudioInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StudioInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StudioInterceptor = TestBed.inject(StudioInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
