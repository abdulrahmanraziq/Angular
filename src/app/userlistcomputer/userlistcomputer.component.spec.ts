import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistcomputerComponent } from './userlistcomputer.component';

describe('UserlistcomputerComponent', () => {
  let component: UserlistcomputerComponent;
  let fixture: ComponentFixture<UserlistcomputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistcomputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistcomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
