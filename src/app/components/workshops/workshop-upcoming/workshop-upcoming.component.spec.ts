import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopUpcomingComponent } from './workshop-upcoming.component';

describe('WorkshopUpcomingComponent', () => {
  let component: WorkshopUpcomingComponent;
  let fixture: ComponentFixture<WorkshopUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
