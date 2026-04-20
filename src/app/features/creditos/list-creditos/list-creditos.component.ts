import { Component, inject, OnInit } from '@angular/core';
import { CreditoService } from '../../../core/services/credito.service';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Credito } from '../../../shared/models/credito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-list-creditos',
  imports: [MatTableModule, MatButtonModule, CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './list-creditos.component.html',
  styleUrl: './list-creditos.component.css'
})
export class ListCreditosComponent implements OnInit { 

  private readonly service = inject(CreditoService);

  creditos: Credito[] = [];

  pagos: { [key: string]: number } = {};

  displayedColumns: string[] = ['id', 'monto', 'saldo', 'tasaInteres', 'meses', 'estado', 'fechaCreacion', 'acciones'];

  ngOnInit() {
    this.obtenerCreditos();
  }

  obtenerCreditos() {
    this.service.obtenerCreditos().subscribe({
      next: (res) => {
        this.creditos = res.data;
        console.log(res.mensaje);
      },
      error: (err) => {
        alert(err.error?.mensaje || 'Error al obtener créditos');
      }
    });
  }

  pagar(id: string) {
    const monto = this.pagos[id];

    if (!monto || monto <= 0) {
      alert('Ingrese un monto válido');
      return;
    }

    this.service.pagarCredito(id, monto).subscribe({
      next: (res) => {
        alert(res.mensaje);
        this.obtenerCreditos();
      },
      error: (err) => {
        alert(err.error?.mensaje || 'Error al pagar');
      }
    });
  }
}
