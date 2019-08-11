import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportserviceComponent } from './sportservice.component';

describe('SportserviceComponent', () => {
  let component: SportserviceComponent;
  let fixture: ComponentFixture<SportserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
