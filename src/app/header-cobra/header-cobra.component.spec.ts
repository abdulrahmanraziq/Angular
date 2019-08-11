import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCobraComponent } from './header-cobra.component';

describe('HeaderCobraComponent', () => {
  let component: HeaderCobraComponent;
  let fixture: ComponentFixture<HeaderCobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
