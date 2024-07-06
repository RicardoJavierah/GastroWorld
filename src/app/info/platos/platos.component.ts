import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../../page/principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { Pastcard1Component } from '../../shared/components/contenido/pasta/pastcard1/pastcard1.component';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [NavbarComponent,Pastcard1Component, SliderComponent, FoodcardComponent, RouterOutlet, Pastcard1Component, AngularMaterialModule],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  
}
