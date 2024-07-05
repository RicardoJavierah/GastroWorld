import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';



export interface ElementoTabla {
  posicion: number;
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-carrito-compra',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './carrito-compra.component.html',
  styleUrl: './carrito-compra.component.css'
})

export class CarritoCompraComponent {
  displayedColumns: string[] = ['posicion', 'nombre', 'descripcion', 'acciones'];

  elementos: ElementoTabla[] = [
    { posicion: 1, nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1' },
    { posicion: 2, nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2' },
    { posicion: 3, nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3' }
  ];

  eliminarElemento(index: number): void {
    this.elementos.splice(index, 1);
  }
}
