import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import productData from './products_data';

@Component({
  selector: 'app-angular-demo',
  imports: [
    FormsModule
  ],
  templateUrl: './angular-demo.component.html',
  styleUrl: './angular-demo.component.css'
})
export class AngularDemoComponent {

  num : number= 4;
  dayNum : number = 1;

  stateNames = ['Odisha', 'West Bengal', 'Bihar', 'Jharkhand'];
  selected:string= 'West Bengal';


    employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  flag: boolean = true;

  productsArr = productData;


}
