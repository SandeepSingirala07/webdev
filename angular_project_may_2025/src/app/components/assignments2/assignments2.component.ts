import { Component } from '@angular/core';
import employeeData from './employer_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignments2',
  imports: [NgxPaginationModule,
    FormsModule
  ],
  templateUrl: './assignments2.component.html',
  styleUrl: './assignments2.component.css',
})
export class Assignments2Component {
  employeeArr: any[] = employeeData;
  filteredEmployees: any[] = employeeData;
  e: number = 1;
  searchText: string = '';
  isVisible = true;

    get filteredEmployeeArr(): any[] {
    if (!this.searchText) {
      return [...this.employeeArr]; // Return all employees if search text is empty
    }
    const lowerSearchText = this.searchText.toLowerCase();
    return this.employeeArr.filter(employee =>
      employee.id.toString().includes(lowerSearchText) ||
      employee.title.toLowerCase().includes(lowerSearchText)
    );
  }

  ngOnInit() {
    console.log(
      'Employee:',
      this.employeeArr.sort((a, b) => a.price - b.price)
    );
  }

  toggleContent() {
    this.isVisible = !this.isVisible;
  }

  onSearchChange(): void {
    const id = Number(this.searchText.trim());
    if (!this.searchText.trim()) {
      this.filteredEmployees = this.employeeArr;
    } else if (!isNaN(id)) {
      this.filteredEmployees = this.employeeArr.filter(emp => emp.id === id);
    } else {
      this.filteredEmployees = [];
    }
  } 
}
