# Reto 3 - Automatización con Screenplay y Playwright

Este proyecto cumple con los requisitos del Reto 3, utilizando una arquitectura de **Screenplay** y pruebas de **API**.

## Herramientas utilizadas
* **Lenguaje:** TypeScript
* **Framework:** Playwright
* **BDD:** Cucumber (Gherkin)
* **CI/CD:** GitHub Actions

## Escenarios Cubiertos
1. **E2E (Camino Feliz):** Flujo completo de compra en la tienda.
2. **Negativo:** Intento de login fallido con validación de mensaje de error.
3. **Libre Decisión:** Flujo de cierre de sesión (Logout).
4. **API:** Pruebas de contrato y flujo (Login + Token + Get User) para 3 usuarios distintos.

## Cómo ejecutar localmente
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Ejecutar `npx playwright test`.
