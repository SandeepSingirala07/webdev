import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeserviceService {
//  employees = [
//     { name: 'John Doe', gender: 'male', position: 'Developer' },
//     { name: 'Jane Smith', gender: 'female', position: 'Designer' },
//     { name: 'Alice Brown', gender: 'female', position: 'Manager' },
//     { name: 'Bob Johnson', gender: 'male', position: 'Tester' }
//   ];
  employees1 = [
    { "eId": 101, "name": "Kohli", "sal": 15000, "gender": "Male" },
    { "eId": 104, "name": "Smrithi", "sal": 8000, "gender": "Female" },
    { "eId": 103, "name": "Ridhansh", "sal": 7000, "gender": "Male" },
    { "eId": 102, "name": "Rukhsar", "sal": 9000, "gender": "Female" },
    { "eId": 105, "name": "Kishor", "sal": 8000, "gender": "Male" }
  ];

  getAllEmployees() {
    return this.employees1;
  }

  getMaleEmployees() {
    return this.employees1.filter(emp => emp.gender === 'Male');
  }

  getFemaleEmployees() {
    return this.employees1.filter(emp => emp.gender === 'Female');
  }

}
