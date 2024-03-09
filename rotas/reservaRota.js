const express = require('express');
const router = express.Router();

const reservaControl = require('../controladores/reservaControl');

router.post('/reserva-inserir', reservaControl.inserir);
router.get('/reserva-buscar', reservaControl.buscar);
router.put('/reserva-atualizar', reservaControl.atualizar);

module.exports = router;