import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebiAlltimeFavComponent } from './webi-alltime-fav.component';

describe('WebiAlltimeFavComponent', () => {
  let component: WebiAlltimeFavComponent;
  let fixture: ComponentFixture<WebiAlltimeFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebiAlltimeFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebiAlltimeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
