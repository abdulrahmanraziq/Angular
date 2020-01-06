import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bench1Component } from './bench1.component';

describe('Bench1Component', () => {
  let component: Bench1Component;
  let fixture: ComponentFixture<Bench1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bench1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bench1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
