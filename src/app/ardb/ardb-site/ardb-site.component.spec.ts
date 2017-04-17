import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdbSiteComponent } from './ardb-site.component';

describe('ArdbSiteComponent', () => {
  let component: ArdbSiteComponent;
  let fixture: ComponentFixture<ArdbSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdbSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdbSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
