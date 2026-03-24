import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../../shared/models/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerCreditos(): Observable<Credito[]> {
    return this.http.get<Credito[]>(this.apiUrl + '/api/credito');
  }
}
