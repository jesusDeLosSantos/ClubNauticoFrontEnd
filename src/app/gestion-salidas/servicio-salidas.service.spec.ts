import { TestBed } from '@angular/core/testing';

import { ServicioSalidasService } from './servicio-salidas.service';

describe('ServicioSalidasService', () => {
  let service: ServicioSalidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSalidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
