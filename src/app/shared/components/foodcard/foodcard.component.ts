import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

@Component({
  selector: 'app-foodcard',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent {
}
