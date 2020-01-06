import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreactiveformtestComponent } from './userreactiveformtest.component';

describe('UserreactiveformtestComponent', () => {
  let component: UserreactiveformtestComponent;
  let fixture: ComponentFixture<UserreactiveformtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreactiveformtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreactiveformtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
