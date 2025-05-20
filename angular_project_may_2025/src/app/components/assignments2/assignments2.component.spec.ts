import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignments2Component } from './assignments2.component';

describe('Assignments2Component', () => {
  let component: Assignments2Component;
  let fixture: ComponentFixture<Assignments2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignments2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignments2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
