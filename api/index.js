let app = require('express')(),
  filter = require('./filter'),
  vacancies = require('./vacancies'),
  config = require('../config');

app.get('/config', (req, res) => {
  res.send(config.client);
});

app.get('/vacancies/select', (req, res) => {
  res.send(vacancies)
});

app.get('/filter/vacancies/select', (req, res) => {
  res.send(filter)
});

module.exports = app;