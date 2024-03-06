const express = require('express');
const router = express.Router();

const clienteControl = require('../controladores/clienteControl');

router.post('/pessoa-cliente', clienteControl.inserir);

module.exports = router;