import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardTwoComponent } from './userdashboard-two.component';

describe('UserdashboardTwoComponent', () => {
  let component: UserdashboardTwoComponent;
  let fixture: ComponentFixture<UserdashboardTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
