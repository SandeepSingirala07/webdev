import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-crud',
  imports: [
    FontAwesomeModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent  {

  faTrash = faTrash;
  faPlus = faPlus;

  showModal = false;

    formData = {
    id:0, 
    name: '',
    department: '',
    position: '',
    salary: 0,
    email: ''
  };

  saveData() {
    //console.log('Submitted:', this.formData);
      // new Snackbar('Employee data saved successfully!');
      new Snackbar(`Employee added successfully`, {
    theme: 'light',
    position: 'top-center',
    actionText: 'Hurray :)!'
});
    this.employees.push(this.formData)
    this.formData = {
  id: 0,
  name: '',
  department: '',
  position: '',
  salary: 0,
  email: ''
    };
    this.showModal = false;
  }

  deleteItem(id:Number) {

     this.employees = this.employees.filter(emp => emp.id !== id);
     //console.log(this.employees);

  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

  }


  employees = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Engineering",
    position: "Software Engineer",
    salary: 85000,
    email: "alice.johnson@example.com"
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 75000,
    email: "bob.smith@example.com"
  },
  {
    id: 3,
    name: "Carol Lee",
    department: "Human Resources",
    position: "HR Coordinator",
    salary: 60000,
    email: "carol.lee@example.com"
  },
  {
    id: 4,
    name: "David Kim",
    department: "Finance",
    position: "Financial Analyst",
    salary: 70000,
    email: "david.kim@example.com"
  }
];

}

// Assignment
// =========
// 1. create 1 EmployeeCRUD component
// 2. display list of employees in a table(data comes from an array)
// 3. user should be able to delete Employee (ask user confirmation) 
// 4. view the details of each employee in a modal (bootstrap Modal)
// 5. add a new employee to the table (insert a new record to the array)
//    use SnackBar to display message ('EmployAdded Successfully' - message should be maintained in a constant file)
// 6. use font-awesome to display any icons (star , delete, edit)
