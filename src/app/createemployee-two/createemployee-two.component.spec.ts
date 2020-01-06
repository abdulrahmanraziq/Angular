import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeeTwoComponent } from './createemployee-two.component';

describe('CreateemployeeTwoComponent', () => {
  let component: CreateemployeeTwoComponent;
  let fixture: ComponentFixture<CreateemployeeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
