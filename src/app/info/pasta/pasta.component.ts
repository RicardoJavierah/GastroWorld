import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../../page/principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PastacardComponent } from '../../shared/components/pastacard/pastacard.component';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, FoodcardComponent, SaladcardComponent, RouterOutlet, PastacardComponent],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {

}
