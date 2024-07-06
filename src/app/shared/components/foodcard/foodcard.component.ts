import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-foodcard',
  standalone: true,
  imports: [AngularMaterialModule, FooterComponent],
  templateUrl: './foodcard.component.html',
  styleUrl: './foodcard.component.css'
})
export class FoodcardComponent {
}
