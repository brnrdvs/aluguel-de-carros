const express = require('express');
const router = express.Router();

const pessoaControl = require('../controladores/pessoaControl');

router.post('/pessoa', pessoaControl.inserir);

module.exports = router;