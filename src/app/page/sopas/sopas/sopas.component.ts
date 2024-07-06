import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../../shared/angular-material/angular-material.module';
import { Router, RouterOutlet } from '@angular/router';
import { Pastcard1Component } from '../../../shared/components/contenido/pasta/pastcard1/pastcard1.component';
import { SaladcardComponent } from '../../../shared/components/saladcard/saladcard.component';
import { FoodcardComponent } from '../../../shared/components/foodcard/foodcard.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../principal/slider/slider.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { PlatoInterface } from '../../../models/plato.interface';
import { PlatoService } from '../../../service/plato/plato.service';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-sopas',
  standalone: true,
<<<<<<< HEAD
  imports: [NavbarComponent, SliderComponent,CommonModule, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, AngularMaterialModule, FooterComponent],
=======
  imports: [NavbarComponent, SliderComponent,CommonModule, FooterComponent, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, AngularMaterialModule],
>>>>>>> a6e10e58817797626f317654e6c181ee993a57bc
  templateUrl: './sopas.component.html',
  styleUrl: './sopas.component.css'
})
export class SopasComponent {
  platosSopa: PlatoInterface[] = [];

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit(): void {
  this.loadPlatosSopa()
  }

  loadPlatosSopa(): void {
    this.platoService.getPlatosByNombreCategoriaSopa().subscribe(
      {
        next:(result)=>{
          this.platosSopa = result
          console.log(this.platosSopa)
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
