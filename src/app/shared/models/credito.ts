export interface Credito {
  id: string;
  monto: number;
  saldo: number;
  tasaInteres: number;
  meses: number;
  estado: number;
  fechaCreacion: Date;
}