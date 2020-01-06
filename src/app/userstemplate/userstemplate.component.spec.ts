import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstemplateComponent } from './userstemplate.component';

describe('UserstemplateComponent', () => {
  let component: UserstemplateComponent;
  let fixture: ComponentFixture<UserstemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
