import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebiArchivedComponent } from './webi-archived.component';

describe('WebiArchivedComponent', () => {
  let component: WebiArchivedComponent;
  let fixture: ComponentFixture<WebiArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebiArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebiArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
