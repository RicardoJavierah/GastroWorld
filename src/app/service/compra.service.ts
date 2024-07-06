import { Injectable } from '@angular/core';
import { ElementoTabla } from '../page/carrito-compra/carrito-compra.component';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  arrayCompra:ElementoTabla[] = []
  constructor() { }

  addCarrito(array: ElementoTabla []){
    this.arrayCompra=array
  }
}
