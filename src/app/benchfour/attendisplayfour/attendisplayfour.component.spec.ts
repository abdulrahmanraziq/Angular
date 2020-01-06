import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendisplayfourComponent } from './attendisplayfour.component';

describe('AttendisplayfourComponent', () => {
  let component: AttendisplayfourComponent;
  let fixture: ComponentFixture<AttendisplayfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendisplayfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendisplayfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
