import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulllogindetailstwoComponent } from './fulllogindetailstwo.component';

describe('FulllogindetailstwoComponent', () => {
  let component: FulllogindetailstwoComponent;
  let fixture: ComponentFixture<FulllogindetailstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulllogindetailstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulllogindetailstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
