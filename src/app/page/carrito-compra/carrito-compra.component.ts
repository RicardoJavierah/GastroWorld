import { Component, inject } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CompraService } from '../../service/compra.service';



export interface ElementoTabla {
  nombre: string;
  descripcion: string;
  precio:number;
}

@Component({
  selector: 'app-carrito-compra',
  standalone: true,
  imports: [AngularMaterialModule,RouterLink, FooterComponent],
  templateUrl: './carrito-compra.component.html',
  styleUrl: './carrito-compra.component.css'
})

export class CarritoCompraComponent {

  serviceCompra=inject(CompraService)
  arrayAdd:ElementoTabla[]=[]

  ngOnInit(){
    console.log(this.elementos)
  }

  displayedColumns: string[] = ['nombre', 'descripcion','precio', 'acciones'];

  elementos: ElementoTabla[] = this.serviceCompra.arrayCompra
  
  /*[
    { nombre: 'Elemento 1', descripcion: 'Descripción del elemento 1',precio:12.4 },
    { nombre: 'Elemento 2', descripcion: 'Descripción del elemento 2',precio:15.90 },
    {nombre: 'Elemento 3', descripcion: 'Descripción del elemento 3',precio:17.9 }
  ];
*/
  dataSource = new MatTableDataSource(this.elementos)

  eliminarElemento(index: number): void {
    this.elementos.splice(index, 1);
    this.dataSource.data = this.elementos
    console.log(this.elementos)

  }
}
