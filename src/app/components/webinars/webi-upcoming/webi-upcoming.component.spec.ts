import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebiUpcomingComponent } from './webi-upcoming.component';

describe('WebiUpcomingComponent', () => {
  let component: WebiUpcomingComponent;
  let fixture: ComponentFixture<WebiUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebiUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebiUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
