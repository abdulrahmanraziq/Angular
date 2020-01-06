import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertemplatetwoComponent } from './usertemplatetwo.component';

describe('UsertemplatetwoComponent', () => {
  let component: UsertemplatetwoComponent;
  let fixture: ComponentFixture<UsertemplatetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertemplatetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertemplatetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
