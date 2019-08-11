import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesfileComponent } from './servicesfile.component';

describe('ServicesfileComponent', () => {
  let component: ServicesfileComponent;
  let fixture: ComponentFixture<ServicesfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
