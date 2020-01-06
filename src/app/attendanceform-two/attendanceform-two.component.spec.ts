import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceformTwoComponent } from './attendanceform-two.component';

describe('AttendanceformTwoComponent', () => {
  let component: AttendanceformTwoComponent;
  let fixture: ComponentFixture<AttendanceformTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceformTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceformTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
