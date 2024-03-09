const express = require('express');

const router = express.Router();

const carroControl = require('../controladores/carroControl');

router.post('/carro', carroControl.inserir);
router.get('/carro-buscar', carroControl.buscar);
router.delete('/carro-deletar', carroControl.deletar);

module.exports = router;