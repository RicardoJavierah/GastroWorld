import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlatoInterface } from '../../models/plato.interface';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private apiUrl = 'http://localhost:8080/api/platos';

  constructor(private http: HttpClient) { }

  getPlatos(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl);
  }

  getPlato(id: number): Observable<PlatoInterface> {
    const url = `${this.apiUrl}`;
    return this.http.get<PlatoInterface>(url);
  }

  getPlatosByNombreCategoriaPasta(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl).pipe(map(result => result.filter((data)=> data.categoriaPlato.categoria == "Pasta")))
  }

  getPlatosByNombreCategoriaEnsalada(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl).pipe(map(result => result.filter((data)=> data.categoriaPlato.categoria == "Ensalada")))
  }

  getPlatosByNombreCategoriaCarne(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl).pipe(map(result => result.filter((data)=> data.categoriaPlato.categoria == "Carnes")))
  }

  getPlatosByNombreCategoriaSopa(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl).pipe(map(result => result.filter((data)=> data.categoriaPlato.categoria == "Sopas")))
  }

  getPlatosByNombreCategoriaBebida(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl).pipe(map(result => result.filter((data)=> data.categoriaPlato.categoria == "Bebidas")))
  }

  getPlatosByNombreCategoriaPostre(): Observable<PlatoInterface[]> {
    return this.http.get<PlatoInterface[]>(this.apiUrl).pipe(map(result => result.filter((data)=> data.categoriaPlato.categoria == "Postres")))
  }



}
