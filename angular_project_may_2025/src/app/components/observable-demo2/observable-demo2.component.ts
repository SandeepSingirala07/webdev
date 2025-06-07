import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {

  constructor(private httpClient: HttpClient) { }

    ngOnInit(){
      this.forkjoin_demo();
    }

    forkjoin_demo(){
  }
}

