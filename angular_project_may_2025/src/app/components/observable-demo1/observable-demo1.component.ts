import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {

  constructor() {}

  ngOnInit() {
    this.create_observable();
  }

  create_observable() {  // publisher - subscriber

    let publisher1 = new Observable((Producer) => {
      Producer.next('AAAAA');
      Producer.next('BBBB');
      Producer.next('CCC');
      Producer.complete();

    });

    let subscriber1 = publisher1.subscribe(
      (partialResponse)=> {
        console.log("Partial Respond ")
      },
      (error) => {
        console.log('Something went wrong', error)
      },
      () => {
        console.log("All Data Received")
      }
    );
  }
}
