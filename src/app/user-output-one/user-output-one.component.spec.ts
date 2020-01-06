import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOutputOneComponent } from './user-output-one.component';

describe('UserOutputOneComponent', () => {
  let component: UserOutputOneComponent;
  let fixture: ComponentFixture<UserOutputOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOutputOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOutputOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
