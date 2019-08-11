import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercobraComponent } from './footercobra.component';

describe('FootercobraComponent', () => {
  let component: FootercobraComponent;
  let fixture: ComponentFixture<FootercobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootercobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
