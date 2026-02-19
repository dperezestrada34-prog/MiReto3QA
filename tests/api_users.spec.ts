import { test, expect } from '@playwright/test';

test.describe('Reto 3 - Pruebas de API DummyJSON', () => {

  // Test 1: GET a endpoint público (sin autenticación)
  test('Obtener lista de usuarios públicos', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users?limit=3');
    
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.users).toBeDefined();
    expect(data.users.length).toBeGreaterThan(0);
    console.log(` Se obtuvieron ${data.users.length} usuarios`);
  });

  // Test 2: Obtener un producto específico
  test('Obtener detalles de un producto', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/products/1');
    
    expect(response.status()).toBe(200);
    const product = await response.json();
    expect(product.id).toBe(1);
    expect(product.title).toBeDefined();
    console.log(` Producto obtenido: ${product.title}`);
  });

  // Test 3: Login con credenciales válidas
  test('Login exitoso y obtención de token', async ({ request }) => {
    const loginResponse = await request.post('https://dummyjson.com/auth/login', {
      data: {
        username: 'emilys',
        password: 'emilyspass'
      }
    });

    console.log(` Login Status: ${loginResponse.status()}`);
    expect(loginResponse.ok()).toBeTruthy();
    
    const loginBody = await loginResponse.json();
    expect(loginBody.token).toBeDefined();
    console.log(` Token obtenido exitosamente`);
  });
});