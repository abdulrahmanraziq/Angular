import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinepenComponent } from './heroinepen.component';

describe('HeroinepenComponent', () => {
  let component: HeroinepenComponent;
  let fixture: ComponentFixture<HeroinepenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroinepenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
