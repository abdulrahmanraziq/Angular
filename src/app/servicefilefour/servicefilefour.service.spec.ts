import { TestBed } from '@angular/core/testing';

import { ServicefilefourService } from './servicefilefour.service';

describe('ServicefilefourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefilefourService = TestBed.get(ServicefilefourService);
    expect(service).toBeTruthy();
  });
});
