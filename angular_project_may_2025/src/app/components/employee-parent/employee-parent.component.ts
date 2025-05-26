import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EmployeeChild1Component } from '../employee-child1/employee-child1.component';
import { EmployeeChild2Component } from '../employee-child2/employee-child2.component';

@Component({
  selector: 'app-employee-parent',
  imports: [EmployeeChild1Component, EmployeeChild2Component],
  templateUrl: './employee-parent.component.html',
  styleUrl: './employee-parent.component.css',
  //input: [ employees ]
})
export class EmployeeParentComponent {
  //showModal: any;
  @ViewChild(EmployeeChild2Component) childModal!: EmployeeChild2Component;


  // Receives id from child to delete data
  receiveDataFromChild1(empId: number) {
    this.employees = this.employees.filter((emp) => emp.id !== empId);
  }


  // To notify the Child2 component that add employed button clicked
  openModalFlag = false;
  openFormModal() {
    this.childModal.openModal();  // calls the method in the child component
  }


  // Receives data from child2 after form submission/ add employee
  receiveFormDataChild2(formData: any) {
    console.log('Form Data from parent');
    this.employees.push(formData);
  }

  employees = [
    {
      id: 1,
      name: 'Alice Johnson',
      department: 'Engineering',
      position: 'Software Engineer',
      salary: 85000,
      email: 'alice.johnson@example.com',
    },
    {
      id: 2,
      name: 'Bob Smith',
      department: 'Marketing',
      position: 'Marketing Manager',
      salary: 75000,
      email: 'bob.smith@example.com',
    },
    {
      id: 3,
      name: 'Carol Lee',
      department: 'Human Resources',
      position: 'HR Coordinator',
      salary: 60000,
      email: 'carol.lee@example.com',
    },
    {
      id: 4,
      name: 'David Kim',
      department: 'Finance',
      position: 'Financial Analyst',
      salary: 70000,
      email: 'david.kim@example.com',
    },
  ];
}
