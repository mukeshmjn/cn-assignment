import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampAlltimeFavComponent } from './bootcamp-alltime-fav.component';

describe('BootcampAlltimeFavComponent', () => {
  let component: BootcampAlltimeFavComponent;
  let fixture: ComponentFixture<BootcampAlltimeFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampAlltimeFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampAlltimeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
