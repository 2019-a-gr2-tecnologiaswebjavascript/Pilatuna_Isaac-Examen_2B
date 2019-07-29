import { TestBed } from '@angular/core/testing';

import { BaseDeDatosService } from './base-de-datos.service';

describe('BaseDeDatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseDeDatosService = TestBed.get(BaseDeDatosService);
    expect(service).toBeTruthy();
  });
});
