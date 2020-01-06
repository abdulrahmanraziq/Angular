import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginOneComponent } from './userlogin-one.component';

describe('UserloginOneComponent', () => {
  let component: UserloginOneComponent;
  let fixture: ComponentFixture<UserloginOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserloginOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
