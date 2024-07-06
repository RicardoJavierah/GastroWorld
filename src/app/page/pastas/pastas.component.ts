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
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-pastas',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, SliderComponent,CommonModule, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, AngularMaterialModule],
  templateUrl: './pastas.component.html',
  styleUrl: './pastas.component.css'
})
export class PastasComponent {

  platosPasta: PlatoInterface[] = [];

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit(): void {
  this.loadPlatosPasta()
  }

  loadPlatosPasta(): void {
    this.platoService.getPlatosByNombreCategoriaPasta().subscribe(
      {
        next:(result)=>{
          this.platosPasta = result
          console.log(this.platosPasta)
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

  navigateToPage(plato: PlatoInterface) {
    this.router.navigate(['/platos'], { queryParams: { nombre: plato.nombre, precio: plato.precio, disponible: plato.disponible, descripcion: plato.descripcion } });
  }
};
