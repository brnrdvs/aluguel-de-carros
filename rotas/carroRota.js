const express = require('express');

const router = express.Router();

const carroControl = require('../controladores/carroControl');

router.post('/carro', carroControl.inserir);
router.get('/carro-buscar', carroControl.buscar);

module.exports = router;