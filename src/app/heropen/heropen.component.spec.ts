import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeropenComponent } from './heropen.component';

describe('HeropenComponent', () => {
  let component: HeropenComponent;
  let fixture: ComponentFixture<HeropenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeropenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeropenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
