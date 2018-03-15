import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSliceTableComponent } from './time-slice-table.component';

describe('TimeSliceTableComponent', () => {
  let component: TimeSliceTableComponent;
  let fixture: ComponentFixture<TimeSliceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSliceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSliceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
