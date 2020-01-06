import { TestBed } from '@angular/core/testing';

import { ServicefilesixService } from './servicefilesix.service';

describe('ServicefilesixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefilesixService = TestBed.get(ServicefilesixService);
    expect(service).toBeTruthy();
  });
});
