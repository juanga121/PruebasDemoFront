# PruebasDemoFront

Proyecto frontend en Angular enfocado en la implementacion de pruebas unitarias sobre componentes, aplicando buenas practicas de testeo, desacoplamiento y manejo de servicios.

---

# Descripcion

PruebasDemoFront es una aplicacion desarrollada en Angular 19 que consume una API de gestion de creditos. El proyecto esta enfocado en demostrar como implementar pruebas unitarias sobre componentes, simulando dependencias y validando la logica del frontend.

Se utilizan herramientas como Jasmine y Karma para validar el comportamiento de componentes, servicios y manejo de errores en la interfaz.

---

# Objetivo principal

## Testing Completo en Frontend

Implementacion de pruebas unitarias en Angular usando Jasmine y Karma:

- Tests de componentes desacoplados de servicios reales  
- Uso de mocks para simular servicios HTTP  
- Validacion de flujos de interfaz (carga, errores, acciones)  
- Cobertura de escenarios exitosos y fallidos  
- Verificacion de interacciones del usuario  

---

# Caracteristicas secundarias

Como soporte para el testing efectivo, el proyecto implementa:

- Componentes standalone  
- Angular Material para UI  
- Formularios con FormsModule  
- Inyeccion de dependencias con inject()  
- Manejo de estados en componentes  
- Consumo de servicios HTTP mediante servicios Angular  

---

# Arquitectura

El proyecto sigue una estructura modular basada en buenas practicas de Angular.

## Core

- Servicios (CreditoService)  
- Logica de comunicacion con backend  

## Shared

- Modelos (Credito)  
- Tipos reutilizables  

## Features

- Componentes funcionales (ListCreditosComponent)  
- Logica de interfaz y eventos  

---

# Estructura del proyecto

```
pruebas-demo-front

src/app

core/services
Servicios HTTP

shared/models
Modelos de datos

features/list-creditos
Componentes principales

spec.ts
Pruebas unitarias
```

---

# Tecnologias utilizadas

## Framework y lenguaje

- Angular 19  
- TypeScript  

## Testing

- Jasmine  
- Karma  
- @angular/core/testing  

## UI

- Angular Material  

---

# Pruebas unitarias

Las pruebas unitarias validan el comportamiento de los componentes en aislamiento, simulando dependencias externas mediante mocks.

## Estrategia

- Uso de TestBed para configuracion del entorno de pruebas  
- Creacion de spies con jasmine.createSpyObj  
- Simulacion de respuestas con RxJS (of, throwError)  
- Validacion de interacciones con el servicio  

## Ejemplo de casos cubiertos

- Carga correcta de creditos  
- Manejo de errores al obtener datos  
- Validacion de monto antes de pagar  
- Pago exitoso de credito  
- Manejo de errores al pagar  

## Patron AAA (Arrange - Act - Assert)

- Arrange: Configurar mocks y datos de prueba  
- Act: Ejecutar el metodo del componente  
- Assert: Validar resultados y comportamiento  

---

# Development server

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

Luego abrir en el navegador:

http://localhost:4200/

La aplicacion se recargara automaticamente al detectar cambios.

---

# Building

Para compilar el proyecto:

```bash
ng build
```

Los archivos generados se almacenan en la carpeta `dist/`.

---

# Running unit tests

Para ejecutar las pruebas unitarias con Karma:

```bash
ng test
```

Esto abrira el navegador y ejecutara todos los tests automaticamente.

---

# Code scaffolding

Para generar componentes u otros elementos:

```bash
ng generate component nombre-componente
```

Para ver todas las opciones disponibles:

```bash
ng generate --help
```

---

# Debug en pruebas

Las pruebas pueden depurarse desde el navegador:

- Abrir la consola del navegador  
- Revisar logs y errores  
- Usar breakpoints en los tests  

---

# En resumen

Este proyecto demuestra como implementar pruebas unitarias en Angular enfocadas en componentes, utilizando mocks para desacoplar dependencias y validando flujos completos de interfaz, garantizando calidad y mantenibilidad en el frontend.
