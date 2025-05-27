import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curd',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './curd.component.html',
  styleUrl: './curd.component.css'
})
export class CurdComponent {

//   user_url = 'https://dummy.restapiexample.com/api/v1/employees';
//   user_subscription: any;
//   subscriptionArr: Subscription[] = [];
//   isLoading: boolean = false;
//   employeeData : any[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.fetchUserData_angular();
//   }

// fetchUserData_angular() {
//   this.user_subscription = this.http
//     .get(this.user_url, { observe: 'response' })
//     .subscribe(response => {
//       const body: any = response.body;
//       if (body.status === 'success') {
//         this.employeeData = body.data;  // ✅ store the employee array
//       }
//     });

//   this.subscriptionArr.push(this.user_subscription);
// }

  // users: any[] = [];
  // isLoading = false;
  // newUser: any = { employee_name: '', employee_salary: 0, employee_age: 0 };
  // editId: number | null = null;
  // editMode = false;

  // constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   this.fetchUsers();
  // }

  // fetchUsers(): void {
  //   this.isLoading = true;
  //   this.userService.getUsers().subscribe({
  //     next: res => {
  //       this.users = res.data;
  //       this.isLoading = false;
  //     },
  //     error: () => {
  //       alert('Failed to fetch users');
  //       this.isLoading = false;
  //     }
  //   });
  // }

  // addUser(): void {
  //   this.userService.createUser(this.newUser).subscribe(() => {
  //     this.fetchUsers();
  //     this.newUser = { employee_name: '', employee_salary: 0, employee_age: 0 };
  //   });
  // }

  // deleteUser(id: number): void {
  //   this.userService.deleteUser(id).subscribe(() => {
  //     this.fetchUsers();
  //   });
  // }

  // startEdit(user: any): void {
  //   this.editMode = true;
  //   this.editId = user.id;
  //   this.newUser = { ...user };
  // }

  // updateUser(): void {
  //   if (this.editId !== null) {
  //     this.userService.updateUser(this.editId, this.newUser).subscribe(() => {
  //       this.fetchUsers();
  //       this.newUser = { employee_name: '', employee_salary: 0, employee_age: 0 };
  //       this.editMode = false;
  //       this.editId = null;
  //     });
  //   }
  // }


    formUser = {
    name: '',
    salary: '',
    age: ''
  };

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }

  addUser() {
    this.userService.createUser(this.formUser);
    this.formUser = { name: '', salary: '', age: '' };
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }

  updateUser(user: any) {
    const updatedUser = {
      name: user.employee_name + ' Updated',
      salary: user.employee_salary,
      age: user.employee_age
    };
    this.userService.updateUser(user.id, updatedUser);
  }
}
