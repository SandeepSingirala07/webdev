import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignments',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  showParagraph = true;

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
  }

  message: string = '';
  remainingChars: number = 100;

  updateRemainingChars() {
    this.remainingChars = 100 - (this.message?.length || 0);
  }
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii'
    // Add more as needed
  ];

  selectedState: string = '';


  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  result: number = 0;

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : NaN;
        break;
    }
  }
}
