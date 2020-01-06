import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancesevenComponent } from './attendanceseven.component';

describe('AttendancesevenComponent', () => {
  let component: AttendancesevenComponent;
  let fixture: ComponentFixture<AttendancesevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancesevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
