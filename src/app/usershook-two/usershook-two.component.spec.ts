import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershookTwoComponent } from './usershook-two.component';

describe('UsershookTwoComponent', () => {
  let component: UsershookTwoComponent;
  let fixture: ComponentFixture<UsershookTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershookTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershookTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
