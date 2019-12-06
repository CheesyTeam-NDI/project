import { TestBed } from '@angular/core/testing';

import { SimulationServiceService } from './simulation-service.service';

describe('SimulationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimulationServiceService = TestBed.get(SimulationServiceService);
    expect(service).toBeTruthy();
  });
});
