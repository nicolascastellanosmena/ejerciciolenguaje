import { TestBed } from '@angular/core/testing';

import { ApiNicoService } from './api-nico.service';

describe('ApiNicoService', () => {
  let service: ApiNicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
