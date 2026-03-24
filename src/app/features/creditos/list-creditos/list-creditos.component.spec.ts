import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCreditosComponent } from './list-creditos.component';
import { CreditoService } from '../../../core/services/credito.service';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Credito } from '../../../shared/models/credito';

function apiResponse<T>(data: T, mensaje: string = 'ok') {
  return {
    exito: true,
    mensaje,
    data
  };
}

fdescribe('ListCreditosComponent', () => {
  let component: ListCreditosComponent;
  let fixture: ComponentFixture<ListCreditosComponent>;
  let creditoServiceMock: jasmine.SpyObj<CreditoService>;

  beforeEach(async () => {
    creditoServiceMock = jasmine.createSpyObj('CreditoService', [
      'obtenerCreditos',
      'pagarCredito'
    ]);

    await TestBed.configureTestingModule({
      imports: [
        ListCreditosComponent,
        NoopAnimationsModule
      ],
      providers: [
        { provide: CreditoService, useValue: creditoServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCreditosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar créditos correctamente', () => {

    const mockCreditos: Credito[] = [{ id: '1', monto: 1000 } as Credito];
    creditoServiceMock.obtenerCreditos.and.returnValue(of(apiResponse(mockCreditos)));

    component.obtenerCreditos();

    expect(component.creditos.length).toBe(1);
    expect(creditoServiceMock.obtenerCreditos).toHaveBeenCalled();
  });

  it('debería mostrar alerta si falla la carga', () => {

    spyOn(window, 'alert');
    creditoServiceMock.obtenerCreditos.and.returnValue(
      throwError(() => ({ error: { mensaje: 'Error backend' } }))
    );

    component.obtenerCreditos();

    expect(window.alert).toHaveBeenCalledWith('Error backend');
  });

  it('no debería pagar si el monto es inválido', () => {
    spyOn(window, 'alert');
    component.pagos['1'] = 0;

    component.pagar('1');

    expect(window.alert).toHaveBeenCalledWith('Ingrese un monto válido');
    expect(creditoServiceMock.pagarCredito).not.toHaveBeenCalled();
  });

  it('debería pagar correctamente', () => {
    spyOn(window, 'alert');
    component.pagos['1'] = 500;

    creditoServiceMock.pagarCredito.and.returnValue(of(apiResponse(null, 'Pago exitoso')));
    spyOn(component, 'obtenerCreditos');

    component.pagar('1');

    expect(creditoServiceMock.pagarCredito).toHaveBeenCalledWith('1', 500);
    expect(window.alert).toHaveBeenCalledWith('Pago exitoso');
    expect(component.obtenerCreditos).toHaveBeenCalled();
  });

  it('debería manejar error al pagar', () => {
    spyOn(window, 'alert');
    component.pagos['1'] = 500;

    creditoServiceMock.pagarCredito.and.returnValue(
      throwError(() => ({ error: { mensaje: 'Error al pagar' } }))
    );

    component.pagar('1');

    expect(window.alert).toHaveBeenCalledWith('Error al pagar');
  });
});
