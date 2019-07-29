import { TestBed } from '@angular/core/testing';

import { SistemaOperativoHttpService } from './sistema-operativo-http.service';

describe('SistemaOperativoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SistemaOperativoHttpService = TestBed.get(SistemaOperativoHttpService);
    expect(service).toBeTruthy();
  });
});
