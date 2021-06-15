import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampUpcomingComponent } from './bootcamp-upcoming.component';

describe('BootcampUpcomingComponent', () => {
  let component: BootcampUpcomingComponent;
  let fixture: ComponentFixture<BootcampUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
