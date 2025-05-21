import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { AssignmentsComponent } from '../assignments/assignments.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { Assignments2Component } from '../assignments2/assignments2.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { Demo1Component } from '../demo1/demo1.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { Pipes2Component } from '../pipes2/pipes2.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // AssignmentsComponent,
    //DirectivesComponent,
    //ProductsComponent,
     //Assignments2Component,
     //MyModalComponent,
    //  Demo1Component,
    EmployeeCRUDComponent,
    PipesComponent,
    Pipes2Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
