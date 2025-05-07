import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { AssignmentsComponent } from '../assignments/assignments.component';

@Component({
  selector: 'app-body',
  imports: [
    DatabindingComponent,
    AssignmentsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
