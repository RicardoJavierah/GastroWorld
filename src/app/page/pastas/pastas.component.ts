import { Component } from '@angular/core';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pastas',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, FoodcardComponent, SaladcardComponent, RouterOutlet],
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.css'
})
export class PastasComponent {

}
