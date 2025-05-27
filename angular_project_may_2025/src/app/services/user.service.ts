import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://dummy.restapiexample.com/api/v1';
  public users: any[] = [];
  public isLoading = false;

  constructor(private http: HttpClient) {}

  getUsers() {
    this.isLoading = true;
    this.http.get(`${this.apiUrl}/employees`).subscribe({
      next: (res: any) => {
        this.users = res.data;
        this.isLoading = false;
      },
      error: err => {
        console.error('Get users error:', err);
        this.isLoading = false;
      }
    });
  }

  createUser(user: any) {
    this.http.post(`${this.apiUrl}/create`, user).subscribe({
      next: res => {
        console.log('User created', res);
        this.getUsers(); // refresh
      },
      error: err => console.error('Create error:', err)
    });
  }

  deleteUser(id: number) {
    this.http.delete(`${this.apiUrl}/delete/${id}`).subscribe({
      next: res => {
        console.log('User deleted', res);
        this.getUsers(); // refresh
      },
      error: err => console.error('Delete error:', err)
    });
  }

  updateUser(id: number, user: any) {
    this.http.put(`${this.apiUrl}/update/${id}`, user).subscribe({
      next: res => {
        console.log('User updated', res);
        this.getUsers(); // refresh
      },
      error: err => console.error('Update error:', err)
    });
  }
}
