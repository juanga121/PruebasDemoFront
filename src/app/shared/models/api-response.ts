export interface ApiResponse<T> {
  exito: boolean;
  mensaje: string;
  data: T;
}