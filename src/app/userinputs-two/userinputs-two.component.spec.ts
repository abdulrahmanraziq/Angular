import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinputsTwoComponent } from './userinputs-two.component';

describe('UserinputsTwoComponent', () => {
  let component: UserinputsTwoComponent;
  let fixture: ComponentFixture<UserinputsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinputsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinputsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
