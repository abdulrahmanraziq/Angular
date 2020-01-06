import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefilesixComponent } from './servicefilesix.component';

describe('ServicefilesixComponent', () => {
  let component: ServicefilesixComponent;
  let fixture: ComponentFixture<ServicefilesixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefilesixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefilesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
