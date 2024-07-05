import { Component } from '@angular/core';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { Pastcard1Component } from '../../shared/components/contenido/pasta/pastcard1/pastcard1.component';
import { Pastcard2Component } from '../../shared/components/contenido/pasta/pastcard2/pastcard2.component';
import { Pastcard3Component } from '../../shared/components/contenido/pasta/pastcard3/pastcard3.component';
import { Pastcard4Component } from '../../shared/components/contenido/pasta/pastcard4/pastcard4.component';
import { Pastcard5Component } from '../../shared/components/contenido/pasta/pastcard5/pastcard5.component';
import { Pastcard6Component } from '../../shared/components/contenido/pasta/pastcard6/pastcard6.component';

@Component({
  selector: 'app-pastas',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, FoodcardComponent, SaladcardComponent, Pastcard2Component, Pastcard1Component, Pastcard3Component, Pastcard4Component, Pastcard5Component, Pastcard6Component, RouterOutlet],
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.css'
})
export class PastasComponent {
}
