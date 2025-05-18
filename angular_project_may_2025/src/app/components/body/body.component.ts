import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { AssignmentsComponent } from '../assignments/assignments.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // AssignmentsComponent,
    // DirectivesComponent,
     ProductsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
