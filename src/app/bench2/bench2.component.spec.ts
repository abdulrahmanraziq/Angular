import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bench2Component } from './bench2.component';

describe('Bench2Component', () => {
  let component: Bench2Component;
  let fixture: ComponentFixture<Bench2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bench2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bench2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
