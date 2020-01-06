import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreactiveformComponent } from './userreactiveform.component';

describe('UserreactiveformComponent', () => {
  let component: UserreactiveformComponent;
  let fixture: ComponentFixture<UserreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
