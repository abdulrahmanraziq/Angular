import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceformThreeComponentComponent } from './attendanceform-three-component.component';

describe('AttendanceformThreeComponentComponent', () => {
  let component: AttendanceformThreeComponentComponent;
  let fixture: ComponentFixture<AttendanceformThreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceformThreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceformThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
