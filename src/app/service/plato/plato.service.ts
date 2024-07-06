import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getPlato(): Observable<PlatoInterface> {
    const url = `${this.apiUrl}`;
    return this.http.get<PlatoInterface>(url);
  }
}
