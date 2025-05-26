import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {

    mathService = inject(MathService);  // Dependency Injection

  ngOnInit() {
    console.log('I am ngOnInit From Math2 Component')
    console.log(this.mathService.mul(10, 20));
  }

}
