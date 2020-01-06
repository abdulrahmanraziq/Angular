import { TestBed } from '@angular/core/testing';

import { ServicefileeightService } from './servicefileeight.service';

describe('ServicefileeightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefileeightService = TestBed.get(ServicefileeightService);
    expect(service).toBeTruthy();
  });
});
