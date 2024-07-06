import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-salacard1',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink, FooterComponent],
  templateUrl: './salacard1.component.html',
  styleUrl: './salacard1.component.css'
})
export class Salacard1Component {



  count: number = 0;

  constructor(private router: Router) {}

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
    this.router.navigate(['/platos']);
  }

}
