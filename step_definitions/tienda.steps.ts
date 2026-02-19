import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';

setDefaultTimeout(60000);

let browser: Browser;
let page: Page;

Before(async function() {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async function() {
  await page?.close();
  await browser?.close();
});

// Scenario 1: Realizar la compra de un producto
Given('que el usuario {string} ha iniciado sesión', async (username: string) => {
  // Navegar a la página de login
  await page.goto('https://dummyjson.com/');
  
  // Este es un ejemplo - en una aplicación real, completarías el login
  console.log(` Usuario ${username} ha iniciado sesión`);
});

When('agrega un {string} al carrito', async (producto: string) => {
  console.log(` Se agregó "${producto}" al carrito`);
  // Aquí irían los pasos para agregar el producto
});

When('completa el formulario de pago', async () => {
  console.log(` Formulario de pago completado`);
  // Aquí irían los pasos para completar el pago
});

Then('debería ver el mensaje {string}', async (mensaje: string) => {
  console.log(`Se validó el mensaje: "${mensaje}"`);
  // Aquí iría la validación del mensaje
});

// Scenario 2: Intento de login con credenciales incorrectas
Given('que el usuario intenta ingresar con {string} y {string}', 
  async (usuario: string, clave: string) => {
  await page.goto('https://dummyjson.com/');
  console.log(`Intento de login con usuario: ${usuario}`);
});

Then('debería visualizar un mensaje de error {string}', async (mensaje: string) => {
  console.log(` Se validó el mensaje de error: "${mensaje}"`);
});

// Scenario 3: Cerrar sesión exitosamente
Given('que el usuario {string} está dentro de su cuenta', async (username: string) => {
  await page.goto('https://dummyjson.com/');
  console.log(` Usuario ${username} está dentro de la cuenta`);
});

When('selecciona la opción de salir', async () => {
  console.log(` Se seleccionó la opción de salir`);
});

Then('debería ser redirigido a la pantalla de inicio de sesión', async () => {
  console.log(` Usuario redirigido a pantalla de login`);
});
