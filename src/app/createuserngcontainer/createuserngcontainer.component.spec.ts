import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserngcontainerComponent } from './createuserngcontainer.component';

describe('CreateuserngcontainerComponent', () => {
  let component: CreateuserngcontainerComponent;
  let fixture: ComponentFixture<CreateuserngcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuserngcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuserngcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
