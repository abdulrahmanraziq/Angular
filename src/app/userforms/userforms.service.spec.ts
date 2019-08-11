import { TestBed } from '@angular/core/testing';

import { UserformsService } from './userforms.service';

describe('UserformsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserformsService = TestBed.get(UserformsService);
    expect(service).toBeTruthy();
  });
});
