import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-assignment4-employee',
  imports: [],
  templateUrl: './assignment4-employee.component.html',
  styleUrl: './assignment4-employee.component.css'
})
export class Assignment4EmployeeComponent {


  employeeService = inject(EmployeeService);
  employees = this.employeeService.employees1;
  selectedFilterAll(){
    this.employees = this.employeeService.getAllEmployees();

  }
  selectedFilterMale(){
      this.employees = this.employeeService.getMaleEmployees();

  }
  selectedFilterFemale(){
      this.employees = this.employeeService.getFemaleEmployees();

  }
}
