import { test, expect } from '@playwright/test';

// Definimos los 3 usuarios que vamos a probar
const usersToTest = [
  { username: 'emilys', password: 'emilyspass' },
  { username: 'michaelw', password: 'michaelwpass' },
  { username: 'oliviay', password: 'oliviaypass' }
];

test.describe('Reto 3 - Pruebas de API DummyJSON', () => {

  for (const user of usersToTest) {
    test(`Flujo completo para el usuario: ${user.username}`, async ({ request }) => {
      
      // 1. POST /login - Validar código 200 y estructura del token
      // Nota: Aunque la tarea pide 201, DummyJSON devuelve 200 por defecto. 
      // Si tu profesor es estricto con el 201, puedes comentarlo en el informe.
      const loginResponse = await request.post('https://dummyjson.com/auth/login', {
        data: {
          username: user.username,
          password: user.password,
          expiresInMins: 30,
        }
      });

      expect(loginResponse.status()).toBe(200);
      const loginBody = await loginResponse.json();
      
      // Prueba de Contrato: Validar que el token existe y es un texto
      expect(loginBody).toHaveProperty('token');
      expect(typeof loginBody.token).toBe('string');

      const token = loginBody.token;

      // 2. Consulta de usuario logueado (Flujo de APIs)
      // Usamos el token obtenido para pedir la info del usuario actual
      const authResponse = await request.get('https://dummyjson.com/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      expect(authResponse.status()).toBe(200);
      const userProfile = await authResponse.json();
      
      // Validamos que el nombre coincida
      expect(userProfile.username).toBe(user.username);
      console.log(`✅ Usuario ${user.username} validado con éxito.`);
    });
  }
});