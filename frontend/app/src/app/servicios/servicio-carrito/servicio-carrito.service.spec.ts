import { TestBed } from '@angular/core/testing';

import { ServicioCarritoService } from './servicio-carrito.service';

describe('ServicioCarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioCarritoService = TestBed.get(ServicioCarritoService);
    expect(service).toBeTruthy();
  });
});
