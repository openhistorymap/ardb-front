import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdbResearcherComponent } from './ardb-researcher.component';

describe('ArdbResearcherComponent', () => {
  let component: ArdbResearcherComponent;
  let fixture: ComponentFixture<ArdbResearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdbResearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdbResearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
