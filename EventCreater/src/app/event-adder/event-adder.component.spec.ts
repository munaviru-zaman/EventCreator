import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdderComponent } from './event-adder.component';

describe('EventAdderComponent', () => {
  let component: EventAdderComponent;
  let fixture: ComponentFixture<EventAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
