import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopArchivedComponent } from './workshop-archived.component';

describe('WorkshopArchivedComponent', () => {
  let component: WorkshopArchivedComponent;
  let fixture: ComponentFixture<WorkshopArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
