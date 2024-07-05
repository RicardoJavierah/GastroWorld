import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { Salacard1Component } from '../../shared/components/contenido/salada/salacard1/salacard1.component';
import { Salacard2Component } from '../../shared/components/contenido/salada/salacard2/salacard2.component';
import { Salacard3Component } from '../../shared/components/contenido/salada/salacard3/salacard3.component';
import { Salacard4Component } from '../../shared/components/contenido/salada/salacard4/salacard4.component';
import { Salacard5Component } from '../../shared/components/contenido/salada/salacard5/salacard5.component';
import { Salacard6Component } from '../../shared/components/contenido/salada/salacard6/salacard6.component';

@Component({
  selector: 'app-ensaladas',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, FoodcardComponent, SaladcardComponent, Salacard1Component, Salacard2Component, Salacard3Component, Salacard4Component,Salacard5Component,Salacard6Component],
  templateUrl: './ensaladas.component.html',
  styleUrl: './ensaladas.component.css'
})
export class EnsaladasComponent {

}
