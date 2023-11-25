// app.test.js

const request = require('supertest');
const app = require('./app');

describe('Pruebas para la aplicación Express', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('debería responder con el mensaje "¡Hola, mundo - Eduardo Pérez | 2020-10473!" en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('¡Hola, mundo - Eduardo Pérez | 2020-10473!');
  });
});

