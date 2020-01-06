import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeefiveComponent } from './createemployeefive.component';

describe('CreateemployeefiveComponent', () => {
  let component: CreateemployeefiveComponent;
  let fixture: ComponentFixture<CreateemployeefiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeefiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
