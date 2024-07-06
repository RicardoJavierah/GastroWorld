import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FoodcardComponent } from '../../../shared/components/foodcard/foodcard.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent,SliderComponent,FoodcardComponent,FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
