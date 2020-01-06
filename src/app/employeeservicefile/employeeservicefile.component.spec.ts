import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeservicefileComponent } from './employeeservicefile.component';

describe('EmployeeservicefileComponent', () => {
  let component: EmployeeservicefileComponent;
  let fixture: ComponentFixture<EmployeeservicefileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeservicefileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeservicefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
