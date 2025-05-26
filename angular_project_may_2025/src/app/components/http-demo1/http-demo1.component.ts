import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  user_url = 'https://jsonplaceholder.typicode.com/users';
  user_subscription: any;
  subscriptionArr: Subscription[] = [];

  isLoading: boolean = false;

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    // this.fetchUserData_javascript();
    this.fetchUserData_angular();
  }
  fetchUserData_javascript() {
    fetch(this.user_url).then(response => { // fetch() returns promise
      response.json().then(finalResponse => {
        console.log(finalResponse);
      });
    });
  }

  fetchUserData_angular() { // httpClient.get() returns Observable
    this.isLoading = true;
    this.user_subscription = this.httpClient.get(this.user_url, { observe: 'response' }).subscribe(response => {
      console.log(response);
      this.isLoading = false;
    })
    this.subscriptionArr.push(this.user_subscription);
  }

  ngOnDestroy() {
    if (this.user_subscription) {
      this.user_subscription.unsubscribe();
    }

    if (this.subscriptionArr.length) {
      this.subscriptionArr.forEach(ele => {
        ele.unsubscribe();
      })
    }
  }
}
