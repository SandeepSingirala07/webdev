import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-child1',
  imports: [],
  templateUrl: './employee-child1.component.html',
  styleUrl: './employee-child1.component.css',
  inputs:  ['employeeList'],
  outputs:['addressEvent']
})
export class EmployeeChild1Component {

  employeeList: any[] = [];

  // To Delete the employee 
  addressEvent = new EventEmitter();
  deleteItem(childEmpId : number) {
    this.addressEvent.emit(childEmpId);
  }
}
