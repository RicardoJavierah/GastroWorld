import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../../page/principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PastacardComponent } from '../../shared/components/pastacard/pastacard.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, FoodcardComponent, RouterOutlet, PastacardComponent, AngularMaterialModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  constructor(private router: Router){}


}
