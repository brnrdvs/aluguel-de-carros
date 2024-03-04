const express = require('express');

const router = express.Router();

const carroControl = require('../controladores/carroControl');

router.post('/carro', carroControl.inserir);

module.exports = router;