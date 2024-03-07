const express = require('express');
const router = express.Router();

const reservaControl = require('../controladores/reservaControl');

router.post('/reserva', reservaControl.inserir);
router.get('/reserva-cpf', reservaControl.buscar);

module.exports = router;