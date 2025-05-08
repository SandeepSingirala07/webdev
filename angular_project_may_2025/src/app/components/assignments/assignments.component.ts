import { Component, Renderer2 } from '@angular/core';
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

  //2 Question
  message: string = '';
  remainingChars: number = 100;

  updateRemainingChars() {
    this.remainingChars = 100 - (this.message?.length || 0);
  }

  //3 Questiom
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii'
    // Add more as needed
  ];

  selectedState: string = '';

  //4 Question
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

   //5 Question 
  userInput: string = '';
  isPassword: boolean = true;

  toggleInputType() {
    this.isPassword = !this.isPassword;
  }


  //8 Question 
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }


  //7 Question
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const themeClass = this.isDarkMode ? 'dark-theme' : 'light-theme';
    this.renderer.setAttribute(document.body, 'class', themeClass);
  }
}
