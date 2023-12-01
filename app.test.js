const request = require('supertest');
const app = require('./app');

describe('Pruebas de la aplicación', () => {
  it('Debería retornar ¡Hola Saul Soto!! en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola Saul Soto!!');
  });
});
