import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { PlatoInterface } from '../../../../../models/plato.interface';

@Component({
  selector: 'app-pastcard1',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink],
  templateUrl: './pastcard1.component.html',
  styleUrl: './pastcard1.component.css'
})
export class Pastcard1Component {

  @Input() plato: PlatoInterface | undefined;
  @Input() index: number | undefined;

  

  constructor(private router: Router) {}

  count: number = 0;
  increment() {
    if (this.count < 10) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  navigateToPage() {
    this.router.navigate(['/platos', this.plato?.id_plato]);
  }
};
