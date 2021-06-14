import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimeFavComponent } from './alltime-fav.component';

describe('AlltimeFavComponent', () => {
  let component: AlltimeFavComponent;
  let fixture: ComponentFixture<AlltimeFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltimeFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltimeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
