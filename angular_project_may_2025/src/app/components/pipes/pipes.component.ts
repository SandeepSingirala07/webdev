import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { MySortPipe } from "../../pipes/my-sort.pipe";

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MySortPipe
],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  userName: string = "Sachin Tendulkar"
  salary: number= 67543;
  today: Date = new Date();

  user: object = {name:'sanjay' , age: 40, add:'hyderabad'};
  nunArry: number[] = [10,20, 30, 40,50, 60];

  msg: string= '';
  msg2: string = '';

  num: number = 21;

  arr = [10, 50, 30, 40, 20]
  arr2 = [10, 50, 30, 40, 20]
}
