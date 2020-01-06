import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistdeviceComponent } from './userlistdevice.component';

describe('UserlistdeviceComponent', () => {
  let component: UserlistdeviceComponent;
  let fixture: ComponentFixture<UserlistdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
