// app.test.js

const request = require('supertest');
const app = require('./app');

describe('Test de la aplicación Express', () => {
  test('debe responder con el mensaje "¡Hola, mundo!" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('¡Hola, mundo!');
  });
});

