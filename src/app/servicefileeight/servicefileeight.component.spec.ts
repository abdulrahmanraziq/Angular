import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefileeightComponent } from './servicefileeight.component';

describe('ServicefileeightComponent', () => {
  let component: ServicefileeightComponent;
  let fixture: ComponentFixture<ServicefileeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefileeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefileeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
