import { Component, inject } from '@angular/core';
import { PlatoInterface } from '../../models/plato.interface';
import { PlatoService } from '../../service/plato/plato.service';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { SliderComponent } from '../principal/slider/slider.component';
import { CommonModule } from '@angular/common';
import { FoodcardComponent } from '../../shared/components/foodcard/foodcard.component';
import { SaladcardComponent } from '../../shared/components/saladcard/saladcard.component';
import { Pastcard1Component } from '../../shared/components/contenido/pasta/pastcard1/pastcard1.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CompraService } from '../../service/compra.service';
import { ElementoTabla } from '../carrito-compra/carrito-compra.component';

@Component({
  selector: 'app-bebida',
  standalone: true,
  imports: [NavbarComponent, SliderComponent,CommonModule, FoodcardComponent, SaladcardComponent,Pastcard1Component, RouterOutlet, AngularMaterialModule, FooterComponent],
  templateUrl: './bebida.component.html',
  styleUrl: './bebida.component.css'
})
export class BebidaComponent {
  platosBebida: PlatoInterface[] = [];
  arrayBebida: ElementoTabla[] = [];
  compraService = inject(CompraService)

  constructor(private platoService: PlatoService, private router: Router) { }

  ngOnInit(): void {
  this.loadPlatosBebida()
  }

  loadPlatosBebida(): void {
    this.platoService.getPlatosByNombreCategoriaBebida().subscribe(
      {
        next:(result)=>{
          this.platosBebida = result
          console.log(this.platosBebida)
        }
      }
    );
  }
  
  comprar(plato: PlatoInterface){

    let array:ElementoTabla = {nombre: plato.nombre, descripcion: plato.descripcion, precio: plato.precio}
    this.arrayBebida.push(array)
    this.compraService.addCarrito(this.arrayBebida)

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
