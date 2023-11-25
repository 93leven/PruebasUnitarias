// app.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('¡Hola, mundo - Eduardo Pérez | 2020-10473!');
});

module.exports = app;
