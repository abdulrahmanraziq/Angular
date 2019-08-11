import { TestBed } from '@angular/core/testing';

import { ServicesfileService } from './servicesfile.service';

describe('ServicesfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesfileService = TestBed.get(ServicesfileService);
    expect(service).toBeTruthy();
  });
});
