import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../../shared/models/credito';
import { ApiResponse } from '../../shared/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  obtenerCreditos(): Observable<ApiResponse<Credito[]>> {
    return this.http.get<ApiResponse<Credito[]>>(this.apiUrl + '/api/credito');
  }

  pagarCredito(id: string, monto: number): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(
      this.apiUrl + '/api/credito/pagar/' + id,
      monto
    );
  }
}