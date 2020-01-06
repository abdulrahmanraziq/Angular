import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernavheaderComponent } from './usernavheader.component';

describe('UsernavheaderComponent', () => {
  let component: UsernavheaderComponent;
  let fixture: ComponentFixture<UsernavheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernavheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernavheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
