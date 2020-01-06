import { TestBed } from '@angular/core/testing';

import { ViewComponentService } from './view-component.service';

describe('ViewComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewComponentService = TestBed.get(ViewComponentService);
    expect(service).toBeTruthy();
  });
});
