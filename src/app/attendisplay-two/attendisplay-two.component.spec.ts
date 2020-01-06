import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendisplayTwoComponent } from './attendisplay-two.component';

describe('AttendisplayTwoComponent', () => {
  let component: AttendisplayTwoComponent;
  let fixture: ComponentFixture<AttendisplayTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendisplayTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendisplayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
