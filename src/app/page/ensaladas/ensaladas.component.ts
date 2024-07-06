import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { Salacard1Component } from '../../shared/components/contenido/salada/salacard1/salacard1.component';
import { PlatoService } from '../../service/plato/plato.service';
import { PlatoInterface } from '../../models/plato.interface';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { Router } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-ensaladas',
  standalone: true,
  imports: [AngularMaterialModule ,NavbarComponent, SliderComponent, FoodcardComponent, SaladcardComponent, Salacard1Component, FooterComponent],
  templateUrl: './ensaladas.component.html',
  styleUrl: './ensaladas.component.css'
})
export class EnsaladasComponent {

  platosEnsalada: PlatoInterface[] = [];

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit(): void {
  this.loadPlatosEnsalada()
  }

  loadPlatosEnsalada(): void {
    this.platoService.getPlatosByNombreCategoriaEnsalada().subscribe(
      {
        next:(result)=>{
          this.platosEnsalada = result
          console.log(this.platosEnsalada)
        }
      }
    );
  }

  count: number = 0;
  increment() {
    if (this.count < 10) {
      this.count++;
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  navigateToPage() {
    this.router.navigateByUrl('/platos');
  }
};
