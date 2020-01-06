import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceformOneComponent } from './attendanceform-one.component';

describe('AttendanceformOneComponent', () => {
  let component: AttendanceformOneComponent;
  let fixture: ComponentFixture<AttendanceformOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceformOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceformOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
