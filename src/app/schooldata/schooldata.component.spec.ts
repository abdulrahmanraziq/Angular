import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldataComponent } from './schooldata.component';

describe('SchooldataComponent', () => {
  let component: SchooldataComponent;
  let fixture: ComponentFixture<SchooldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
