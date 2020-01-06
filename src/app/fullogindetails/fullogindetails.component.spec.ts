import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullogindetailsComponent } from './fullogindetails.component';

describe('FullogindetailsComponent', () => {
  let component: FullogindetailsComponent;
  let fixture: ComponentFixture<FullogindetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullogindetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullogindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
