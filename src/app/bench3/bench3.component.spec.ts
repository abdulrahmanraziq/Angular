import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bench3Component } from './bench3.component';

describe('Bench3Component', () => {
  let component: Bench3Component;
  let fixture: ComponentFixture<Bench3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bench3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bench3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
