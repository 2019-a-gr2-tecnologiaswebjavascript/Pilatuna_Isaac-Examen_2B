import { TestBed } from '@angular/core/testing';

import { DatosCajeroService } from './datos-cajero.service';

describe('DatosCajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosCajeroService = TestBed.get(DatosCajeroService);
    expect(service).toBeTruthy();
  });
});
