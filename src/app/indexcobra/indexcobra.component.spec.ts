import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcobraComponent } from './indexcobra.component';

describe('IndexcobraComponent', () => {
  let component: IndexcobraComponent;
  let fixture: ComponentFixture<IndexcobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
