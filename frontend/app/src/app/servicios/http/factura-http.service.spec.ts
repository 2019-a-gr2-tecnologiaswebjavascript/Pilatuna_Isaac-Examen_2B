import { TestBed } from '@angular/core/testing';

import { FacturaHttpService } from './factura-http.service';

describe('FacturaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaHttpService = TestBed.get(FacturaHttpService);
    expect(service).toBeTruthy();
  });
});
