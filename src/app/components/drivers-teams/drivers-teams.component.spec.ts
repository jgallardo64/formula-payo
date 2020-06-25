import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversTeamsComponent } from './drivers-teams.component';

describe('DriversTeamsComponent', () => {
  let component: DriversTeamsComponent;
  let fixture: ComponentFixture<DriversTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
