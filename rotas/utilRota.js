const express = require('express');

const router = express.Router();

const utilControl = require('../controladores/utilControl');

router.post('/carro-utilitario', utilControl.inserir);

module.exports = router;