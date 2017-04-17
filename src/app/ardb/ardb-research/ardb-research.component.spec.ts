import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdbResearchComponent } from './ardb-research.component';

describe('ArdbResearchComponent', () => {
  let component: ArdbResearchComponent;
  let fixture: ComponentFixture<ArdbResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdbResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdbResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
