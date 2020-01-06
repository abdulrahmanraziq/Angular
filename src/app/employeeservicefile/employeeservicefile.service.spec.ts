import { TestBed } from '@angular/core/testing';

import { EmployeeservicefileService } from './employeeservicefile.service';

describe('EmployeeservicefileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeservicefileService = TestBed.get(EmployeeservicefileService);
    expect(service).toBeTruthy();
  });
});
