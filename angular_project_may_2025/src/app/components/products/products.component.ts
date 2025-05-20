import { Component } from '@angular/core';
import productData from './products_data'
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ZoominDirective } from '../../directives/zoomin.directive';

@Component({
  selector: 'app-products',
  imports: [
    NgxPaginationModule,
    FontAwesomeModule, 
    ZoominDirective
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    //productsArr = productData;

    productsArr = productData;
    p: number = 1;
    faStar = faStar;

}
