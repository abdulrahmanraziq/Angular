import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalListComponent } from './provisional-list.component';

describe('ProvisionalListComponent', () => {
  let component: ProvisionalListComponent;
  let fixture: ComponentFixture<ProvisionalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
