import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAlltimeFavComponent } from './workshop-alltime-fav.component';

describe('WorkshopAlltimeFavComponent', () => {
  let component: WorkshopAlltimeFavComponent;
  let fixture: ComponentFixture<WorkshopAlltimeFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopAlltimeFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopAlltimeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
