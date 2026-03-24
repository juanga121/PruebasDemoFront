import { Component, inject } from '@angular/core';
import { CreditoService } from '../../../core/services/credito.service';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Credito } from '../../../shared/models/credito';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-creditos',
  imports: [MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './list-creditos.component.html',
  styleUrl: './list-creditos.component.css'
})
export class ListCreditosComponent {

  private service = inject(CreditoService);

  creditos: Credito[] = [];

  displayedColumns: string[] = ['id', 'monto', 'saldo', 'tasaInteres', 'meses', 'estado', 'fechaCreacion'];

  ngOnInit() {
    this.obtenerCreditos();
  }

  obtenerCreditos() {
    this.service.obtenerCreditos().subscribe(data => {
      this.creditos = data;
    });
  }
}
