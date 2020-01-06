import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertemplatedriveformComponent } from './usertemplatedriveform.component';

describe('UsertemplatedriveformComponent', () => {
  let component: UsertemplatedriveformComponent;
  let fixture: ComponentFixture<UsertemplatedriveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertemplatedriveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertemplatedriveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
