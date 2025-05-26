import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-child2',
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './employee-child2.component.html',
  styleUrl: './employee-child2.component.css',
  outputs: ['addressEvent'],
   inputs:  ['triggerOpenModal'],
})
export class EmployeeChild2Component  {
  //@Input() triggerOpenModal = false;

  triggerOpenModal = false;

  showModal = false;
  faPlus = faPlus;

  formData = {
    id: 0,
    name: '',
    department: '',
    position: '',
    salary: 0,
    email: '',
  };

   openModal() {
    this.showModal = true;
  }

  // Send formdata to  parent Component
  addressEvent = new EventEmitter();
  saveData() {
    console.log(this.formData);
    this.showModal = false;
    this.addressEvent.emit(this.formData);
  }
}
