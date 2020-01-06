import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeefourComponent } from './createemployeefour.component';

describe('CreateemployeefourComponent', () => {
  let component: CreateemployeefourComponent;
  let fixture: ComponentFixture<CreateemployeefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
