import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilediotrComponent } from './profilediotr.component';

describe('ProfilediotrComponent', () => {
  let component: ProfilediotrComponent;
  let fixture: ComponentFixture<ProfilediotrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilediotrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilediotrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
