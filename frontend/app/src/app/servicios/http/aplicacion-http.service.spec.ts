import { TestBed } from '@angular/core/testing';

import { AplicacionHttpService } from './aplicacion-http.service';

describe('AplicacionHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AplicacionHttpService = TestBed.get(AplicacionHttpService);
    expect(service).toBeTruthy();
  });
});
