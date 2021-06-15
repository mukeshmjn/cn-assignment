import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeArchivedComponent } from './ce-archived.component';

describe('CeArchivedComponent', () => {
  let component: CeArchivedComponent;
  let fixture: ComponentFixture<CeArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
