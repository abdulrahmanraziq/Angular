import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcobraComponent } from './contactcobra.component';

describe('ContactcobraComponent', () => {
  let component: ContactcobraComponent;
  let fixture: ComponentFixture<ContactcobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactcobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactcobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
