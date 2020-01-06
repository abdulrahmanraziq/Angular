import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeesixComponent } from './createemployeesix.component';

describe('CreateemployeesixComponent', () => {
  let component: CreateemployeesixComponent;
  let fixture: ComponentFixture<CreateemployeesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
