import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeropenDetailsComponent } from './heropen-details.component';

describe('HeropenDetailsComponent', () => {
  let component: HeropenDetailsComponent;
  let fixture: ComponentFixture<HeropenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeropenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeropenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
