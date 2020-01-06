import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeethreeComponent } from './createemployeethree.component';

describe('CreateemployeethreeComponent', () => {
  let component: CreateemployeethreeComponent;
  let fixture: ComponentFixture<CreateemployeethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
