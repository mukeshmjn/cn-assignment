import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeAlltimeFavComponent } from './ce-alltime-fav.component';

describe('CeAlltimeFavComponent', () => {
  let component: CeAlltimeFavComponent;
  let fixture: ComponentFixture<CeAlltimeFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeAlltimeFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeAlltimeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
