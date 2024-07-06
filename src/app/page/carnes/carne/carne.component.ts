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
  selector: 'app-carne',
  standalone: true,
<<<<<<< HEAD
  imports: [NavbarComponent, SliderComponent,CommonModule, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, AngularMaterialModule, FooterComponent],
=======
  imports: [NavbarComponent, FooterComponent, SliderComponent,CommonModule, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, AngularMaterialModule],
>>>>>>> a6e10e58817797626f317654e6c181ee993a57bc
  templateUrl: './carne.component.html',
  styleUrl: './carne.component.css'
})
export class CarneComponent {
  platosCarne: PlatoInterface[] = [];

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit(): void {
  this.loadPlatosCarne()
  }

  loadPlatosCarne(): void {
    this.platoService.getPlatosByNombreCategoriaCarne().subscribe(
      {
        next:(result)=>{
          this.platosCarne = result
          console.log(this.platosCarne)
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
