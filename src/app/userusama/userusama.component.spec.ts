import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserusamaComponent } from './userusama.component';

describe('UserusamaComponent', () => {
  let component: UserusamaComponent;
  let fixture: ComponentFixture<UserusamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserusamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserusamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
