import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceformthreeComponent } from './attendanceformthree.component';

describe('AttendanceformthreeComponent', () => {
  let component: AttendanceformthreeComponent;
  let fixture: ComponentFixture<AttendanceformthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceformthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceformthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
