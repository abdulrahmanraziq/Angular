import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetemplateemployeeComponent } from './createtemplateemployee.component';

describe('CreatetemplateemployeeComponent', () => {
  let component: CreatetemplateemployeeComponent;
  let fixture: ComponentFixture<CreatetemplateemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetemplateemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetemplateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
