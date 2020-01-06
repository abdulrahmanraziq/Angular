import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersinputsComponent } from './usersinputs.component';

describe('UsersinputsComponent', () => {
  let component: UsersinputsComponent;
  let fixture: ComponentFixture<UsersinputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersinputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
