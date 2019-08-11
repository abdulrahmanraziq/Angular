import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncobraComponent } from './sectioncobra.component';

describe('SectioncobraComponent', () => {
  let component: SectioncobraComponent;
  let fixture: ComponentFixture<SectioncobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectioncobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioncobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
