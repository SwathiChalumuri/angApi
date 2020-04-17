import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinconceptComponent } from './forkjoinconcept.component';

describe('ForkjoinconceptComponent', () => {
  let component: ForkjoinconceptComponent;
  let fixture: ComponentFixture<ForkjoinconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkjoinconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkjoinconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
