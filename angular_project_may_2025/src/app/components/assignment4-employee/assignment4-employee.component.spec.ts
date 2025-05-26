import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment4EmployeeComponent } from './assignment4-employee.component';

describe('Assignment4EmployeeComponent', () => {
  let component: Assignment4EmployeeComponent;
  let fixture: ComponentFixture<Assignment4EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment4EmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment4EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
