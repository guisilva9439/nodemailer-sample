// Desacoplamento do método Routes do express
const express = require('express');
const routes = express.Router();

const sendMail = require('./Controllers/SendMail');

// Configurar e enviar o email
routes.post('/send', sendMail);

module.exports = routes;