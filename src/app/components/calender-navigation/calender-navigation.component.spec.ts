import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderNavigationComponent } from './calender-navigation.component';

describe('CalenderNavigationComponent', () => {
  let component: CalenderNavigationComponent;
  let fixture: ComponentFixture<CalenderNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
