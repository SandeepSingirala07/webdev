import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentEmployeeServiceComponent } from './assignment-employee-service.component';

describe('AssignmentEmployeeServiceComponent', () => {
  let component: AssignmentEmployeeServiceComponent;
  let fixture: ComponentFixture<AssignmentEmployeeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentEmployeeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentEmployeeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
