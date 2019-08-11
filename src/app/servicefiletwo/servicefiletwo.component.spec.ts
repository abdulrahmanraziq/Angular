import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefiletwoComponent } from './servicefiletwo.component';

describe('ServicefiletwoComponent', () => {
  let component: ServicefiletwoComponent;
  let fixture: ComponentFixture<ServicefiletwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefiletwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefiletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
