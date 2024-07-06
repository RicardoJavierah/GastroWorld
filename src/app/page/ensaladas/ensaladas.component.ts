import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { Salacard1Component } from '../../shared/components/contenido/salada/salacard1/salacard1.component';
import { PlatoService } from '../../service/plato/plato.service';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-ensaladas',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, FoodcardComponent, SaladcardComponent, Salacard1Component, FooterComponent],
  templateUrl: './ensaladas.component.html',
  styleUrl: './ensaladas.component.css'
})
export class EnsaladasComponent {

  ingredientes: any[] = [];

  constructor(private platoService: PlatoService) { }

  ngOnInit(): void {
    this.platoService.getPlatos().subscribe(data => {
      this.ingredientes = data.slice(0, 4);
    });
  }

}
