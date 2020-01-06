import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlogindetailsComponent } from './userlogindetails.component';

describe('UserlogindetailsComponent', () => {
  let component: UserlogindetailsComponent;
  let fixture: ComponentFixture<UserlogindetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlogindetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlogindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
