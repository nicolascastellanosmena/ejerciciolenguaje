import { TestBed } from '@angular/core/testing';

import { ApiChristianService } from './api-christian.service';

describe('ApiChristianService', () => {
  let service: ApiChristianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiChristianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
