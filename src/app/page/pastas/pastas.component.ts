import { Component } from '@angular/core';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { Pastcard1Component } from '../../shared/components/contenido/pasta/pastcard1/pastcard1.component';
import { CommonModule } from '@angular/common';
import { PlatoService } from '../../service/plato/plato.service';
import { PlatoInterface } from '../../models/plato.interface';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-pastas',
  standalone: true,
  imports: [NavbarComponent, SliderComponent,CommonModule, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, FooterComponent],
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.css'
})
export class PastasComponent {

  platos: PlatoInterface[] = [];

  constructor(private platoService: PlatoService) { }

  ngOnInit(): void {
    this.loadPlatos();
  }

  loadPlatos(): void {
    this.platoService.getPlatos().subscribe(
      (data: PlatoInterface[]) => {
        this.platos = data.slice(0, 1);
      },
    );
  }
}
