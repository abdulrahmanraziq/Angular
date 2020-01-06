import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserayshaComponent } from './useraysha.component';

describe('UserayshaComponent', () => {
  let component: UserayshaComponent;
  let fixture: ComponentFixture<UserayshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserayshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserayshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
