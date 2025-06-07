import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, range, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {

  time$ = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
   // this.create_observable();
    //this.from_demo();
    this.interval_demo();
    //this.range_demo();
  }

  create_observable() {  // publisher - subscriber

    let publisher1 = new Observable((Producer) => {
      Producer.next('AAAAA');
      Producer.next('BBBB');
      Producer.next('CCC');
      Producer.complete();

    });

    // let subscriber1 = publisher1.subscribe(
    //   (partialResponse)=> {
    //     console.log("Partial Respond ")
    //   },
    //   (error) => {
    //     console.log('Something went wrong', error)
    //   },
    //   () => {
    //     console.log("All Data Received")
    //   }
    // );

    let subscriber1 = publisher1.subscribe({
      next:(partialResponse) => {console.log("Partial")},
      error:() => {console.log("Something went Wrong")},
      complete:() => {console.log("All Data Received")}

    }
    );

  }

  from_demo() {
    let carArr = ['Tata', 'Honda', 'Maruti'];

    let carObervable = from(carArr);
    carObervable.subscribe(
      (response) => {console.log('Response: ',response)}
    );
  }

  numPublisher : any;
  interval_demo() {
    this.numPublisher = interval(1000);

    this.numPublisher.subscribe((val: any) => console.log(val, "Interval"));
  }


  range_demo(){
    let  publisher_1_10= range(1,10);
    publisher_1_10.subscribe((value:any)=>console.log(value));

    let publisher_1_5 = publisher_1_10.pipe(take(5));
    publisher_1_5.subscribe((value:any)=>console.log(value));

    let publisher_1_5_square = publisher_1_5.pipe(map(ele => ele * ele));
    publisher_1_5_square.subscribe((value:any)=>console.log(value));

    let publisher_1_10_even = publisher_1_10.pipe(filter(ele => ele %2 == 0));
    publisher_1_10_even.subscribe((value:any)=>console.log(value));
  }
}
