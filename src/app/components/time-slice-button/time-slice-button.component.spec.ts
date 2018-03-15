import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSliceButtonComponent } from './time-slice-button.component';

describe('TimeSliceButtonComponent', () => {
  let component: TimeSliceButtonComponent;
  let fixture: ComponentFixture<TimeSliceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSliceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSliceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
