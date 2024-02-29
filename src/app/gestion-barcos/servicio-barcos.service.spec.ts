import { TestBed } from '@angular/core/testing';

import { ServicioBarcosService } from './servicio-barcos.service';

describe('ServicioBarcosService', () => {
  let service: ServicioBarcosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioBarcosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
