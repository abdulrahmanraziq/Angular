import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefilefourComponent } from './servicefilefour.component';

describe('ServicefilefourComponent', () => {
  let component: ServicefilefourComponent;
  let fixture: ComponentFixture<ServicefilefourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefilefourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefilefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
