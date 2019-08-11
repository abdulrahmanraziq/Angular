import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsListComponent } from './logins-list.component';

describe('LoginsListComponent', () => {
  let component: LoginsListComponent;
  let fixture: ComponentFixture<LoginsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
