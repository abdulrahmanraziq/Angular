import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroutputdeviceComponent } from './useroutputdevice.component';

describe('UseroutputdeviceComponent', () => {
  let component: UseroutputdeviceComponent;
  let fixture: ComponentFixture<UseroutputdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseroutputdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroutputdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
