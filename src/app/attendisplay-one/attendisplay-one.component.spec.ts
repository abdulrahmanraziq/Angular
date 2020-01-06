import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendisplayOneComponent } from './attendisplay-one.component';

describe('AttendisplayOneComponent', () => {
  let component: AttendisplayOneComponent;
  let fixture: ComponentFixture<AttendisplayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendisplayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendisplayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
