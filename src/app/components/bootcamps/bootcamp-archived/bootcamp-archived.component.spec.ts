import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampArchivedComponent } from './bootcamp-archived.component';

describe('BootcampArchivedComponent', () => {
  let component: BootcampArchivedComponent;
  let fixture: ComponentFixture<BootcampArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootcampArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
