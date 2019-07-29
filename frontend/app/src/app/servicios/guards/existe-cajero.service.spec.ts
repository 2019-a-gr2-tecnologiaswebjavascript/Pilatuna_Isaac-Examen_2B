import { TestBed } from '@angular/core/testing';

import { ExisteCajeroService } from './existe-cajero.service';

describe('ExisteCajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExisteCajeroService = TestBed.get(ExisteCajeroService);
    expect(service).toBeTruthy();
  });
});
