import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!searchText) return employees;

    searchText = searchText.toLowerCase();
    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchText) ||
      emp.department.toLowerCase().includes(searchText) ||
      emp.position.toLowerCase().includes(searchText)
    );
  }

}
