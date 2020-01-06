import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaldataComponent } from './medicaldata.component';

describe('MedicaldataComponent', () => {
  let component: MedicaldataComponent;
  let fixture: ComponentFixture<MedicaldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicaldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
