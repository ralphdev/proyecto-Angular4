# Migrate Angular 4 to Angular 16 By Rafael Martínez

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version latest.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Aurora Pack CSS
---
que incluye un sistema de grid basado en Flexbox y reglas de diseño responsivo.

## Contenedores (`ae-container` y `ae-container-fluid`)
`.ae-container`: Un contenedor centrado con un ancho máximo que varía según el tamaño de la pantalla (usando @media queries).
.ae-container-fluid: Un contenedor que ocupa casi todo el ancho de la pantalla, pero con márgenes internos para mantener un espaciado consistente.
Ejemplo:

```html
<div class="ae-container">
  <!-- Contenido centrado y limitado -->
</div>
```

## Sistema de Grid (`ae-grid` y `variantes`)
El sistema de grid usa Flexbox para estructurar contenido en filas y columnas.

`.ae-grid`: Define una fila con elementos flexibles (flex-wrap: wrap;).
`.ae-grid__item`: Define los elementos de la fila (columnas). Los anchos se determinan con clases específicas, como `.item-xs-6` (50% del ancho en pantallas pequeñas).
Ejemplo básico:

```html
<div class="ae-grid">
  <div class="ae-grid__item item-xs-6">Columna 1</div>
  <div class="ae-grid__item item-xs-6">Columna 2</div>
</div>
```

## Clases Responsivas

El prefijo (`xs`, `sm`, `md`, `lg`, `xl`) define cómo las columnas se comportan según el ancho de la pantalla:

* `xs`: Extra pequeño (móviles).
* `sm`: Pequeño (tabletas).
* `md`: Mediano (pantallas intermedias).
* `lg`: Grande (laptops y desktops).
* `xl`: Extra grande (pantallas grandes).

Ejemplo:

```html
<div class="ae-grid">
  <div class="ae-grid__item item-xs-12 item-md-6">Columna 1</div>
  <div class="ae-grid__item item-xs-12 item-md-6">Columna 2</div>
</div>
```
En pantallas pequeñas, cada columna ocupa el 100% del ancho, pero en pantallas medianas o más grandes, ocupan el 50%.

##  Offset, Push y Pull

Permiten ajustar el posicionamiento de las columnas dentro del grid:

* `.item-[breakpoint]--offset-x`: Agrega margen a la izquierda de la columna.
*  `.item-[breakpoint]--push-x`: Mueve la columna hacia la derecha.
* `.item-[breakpoint]--pull-x`: Mueve la columna hacia la izquierda.

Ejemplo:

```html
<div class="ae-grid">
  <div class="ae-grid__item item-md--offset-2 item-md-4">Columna desplazada</div>
</div>
```
## Clases de Alineación

Controlan la alineación vertical y horizontal de los elementos:
* `.item-xs--top`: Alinea al inicio.
* `.items-xs--center`: Alinea al centro verticalmente.
* `.item-xs--bottom`: Alinea un solo elemento al final.

## Sistema Masonry
Es un diseño basado en columnas para organizar elementos con diferentes alturas:

* `.ae-masonry`: Configura el contenedor.
* `.ae-masonry__item`: Define los elementos internos.

Ejemplo:

```html
<div class="ae-masonry ae-masonry-xs-2">
  <div class="ae-masonry__item">Elemento 1</div>
  <div class="ae-masonry__item">Elemento 2</div>
</div>
```
