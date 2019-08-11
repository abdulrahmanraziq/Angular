import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentdataComponent } from './componentdata.component';

describe('ComponentdataComponent', () => {
  let component: ComponentdataComponent;
  let fixture: ComponentFixture<ComponentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
