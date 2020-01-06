import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutPutTwoComponent } from './user-out-put-two.component';

describe('UserOutPutTwoComponent', () => {
  let component: UserOutPutTwoComponent;
  let fixture: ComponentFixture<UserOutPutTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOutPutTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOutPutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
