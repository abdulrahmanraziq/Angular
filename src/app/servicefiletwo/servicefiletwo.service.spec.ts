import { TestBed } from '@angular/core/testing';

import { ServicefiletwoService } from './servicefiletwo.service';

describe('ServicefiletwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicefiletwoService = TestBed.get(ServicefiletwoService);
    expect(service).toBeTruthy();
  });
});
