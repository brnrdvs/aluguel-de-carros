const express = require('express');
const router = express.Router();

const funcionarioControl = require('../controladores/funcionarioControl');

router.post('/pessoa-funcionario', funcionarioControl.inserir);

module.exports = router;