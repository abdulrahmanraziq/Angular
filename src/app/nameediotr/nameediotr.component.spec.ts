import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameediotrComponent } from './nameediotr.component';

describe('NameediotrComponent', () => {
  let component: NameediotrComponent;
  let fixture: ComponentFixture<NameediotrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameediotrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameediotrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
