import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceformFourComponentComponent } from './attendanceform-four-component.component';

describe('AttendanceformFourComponentComponent', () => {
  let component: AttendanceformFourComponentComponent;
  let fixture: ComponentFixture<AttendanceformFourComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceformFourComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceformFourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
