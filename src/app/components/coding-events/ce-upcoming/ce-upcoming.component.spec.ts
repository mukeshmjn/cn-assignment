import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeUpcomingComponent } from './ce-upcoming.component';

describe('CeUpcomingComponent', () => {
  let component: CeUpcomingComponent;
  let fixture: ComponentFixture<CeUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
