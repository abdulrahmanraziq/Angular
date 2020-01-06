import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershooksComponent } from './usershooks.component';

describe('UsershooksComponent', () => {
  let component: UsershooksComponent;
  let fixture: ComponentFixture<UsershooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
