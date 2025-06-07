import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentEmployeeServiceService {

   private employeeList: any[] = [
    // Optionally, start with some default employees or keep empty
    // Example:
    // { eId: 101, name: 'Akshay', sal: 5000, gender: 'male' }
  ];

  private employeesSubject = new BehaviorSubject<any[]>(this.employeeList);

  employees$ = this.employeesSubject.asObservable();

  constructor() {}

  addEmployee(employee: any) {
    this.employeeList = [...this.employeeList, employee];
    this.employeesSubject.next(this.employeeList);
  }

  deleteEmployee(eId: number) {
    this.employeeList = this.employeeList.filter(emp => emp.eId !== eId);
    this.employeesSubject.next(this.employeeList);
  }

  clearEmployees() {
    this.employeeList = [];
    this.employeesSubject.next(this.employeeList);
  }
}
