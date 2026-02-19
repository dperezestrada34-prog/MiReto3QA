# Reto 3: Automatización con Playwright, Cucumber y Screenplay

Este proyecto contiene la automatización de pruebas para la API de **DummyJSON** y el flujo de compra de la tienda **Demoblaze**, aplicando el patrón de diseño **Screenplay**.

## Tecnologías Utilizadas
* **Playwright**: Framework base de automatización.
* **Cucumber (Gherkin)**: Para la definición de escenarios de prueba en lenguaje natural.
* **TypeScript**: Lenguaje de programación.
* **Screenplay Pattern**: Para una arquitectura escalable y mantenible.

## Estructura del Proyecto (Screenplay)
La lógica de negocio se encuentra organizada en la carpeta `src/`:
* **Actors**: Define quién realiza las acciones.
* **Tasks**: Acciones de alto nivel (Login, Agregar al carrito).
* **UI**: Localizadores (Selectors) de las páginas.
* **Questions**: Validaciones y aserciones.

## Ejecución de Pruebas

### 1. Pruebas E2E (Tienda con Cucumber)
Para ejecutar los escenarios de BDD:
```bash
npm test