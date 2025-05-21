import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { RomanPipe } from '../../pipes/roman.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { EmployeeFilterPipe } from '../../pipes/employee-filter.pipe';

@Component({
  selector: 'app-pipes2',
  imports: [
    CommonModule,
    OrdinalPipe,
    FormsModule,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    EmployeeFilterPipe
  ],
  templateUrl: './pipes2.component.html',
  styleUrl: './pipes2.component.css'
})
export class Pipes2Component {
  number: number | null = null;
  numbers: number[] = [];

  add() {
    if (this.number !== null) {
      this.numbers.push(this.number);
      this.number = null; // clear input
    }
  }

  //==========================2===========================
  inputValue: number | null = null;
  values: number[] = [];

  addValue() {
    if (this.inputValue !== null) {
      this.values.push(this.inputValue);
      this.inputValue = null; // Clear input
    }
  }
  
  //===========================================
    birthdateInput: string = '';
  birthdatesList: string[] = [];

  addBirthdate() {
    if (this.birthdateInput) {
      this.birthdatesList.push(this.birthdateInput);
      this.birthdateInput = '';
    }
  }

  ///////////////////////////////////////////////
    searchText: string = '';

  employees = [
    { id: 1, name: 'Alice Johnson', gender: 'female', department: 'Engineering', position: 'Software Engineer' },
    { id: 2, name: 'Bob Smith', gender: 'male', department: 'Marketing', position: 'Marketing Manager' },
    { id: 3, name: 'Carol Lee', gender: 'female', department: 'HR', position: 'HR Coordinator' },
    { id: 4, name: 'David Kim', gender: 'male', department: 'Finance', position: 'Analyst' }
  ];
}


// Assignment
// ==========
// 1. Create a custom pipe(ordinal) which takes a number as input and returns in ordinal format
//    input : 21,22,23,24  output : 21st, 22nd , 23rd, 24th
// 2. create a custom pipe(Roman) which takes a number as input and returns its equivalent roman value
//    input :  4    8     9   
//    output : IV  VIII   IX 
// 3. create a custom pipe called 'age' which takes a date as input and returns the age in years.
//    input : 04-06-2020
//    output : 5 years old
// 4. declare an array of employee objects. display them in a table.
//    create a custom pipe 'Salutation' that will add 'mr. / miss.' before the employee name.
// 5. declare an array of employee objects. display them in a table. 
//    add a search-box above the table. create a custom-pipe to filter/search employees data.