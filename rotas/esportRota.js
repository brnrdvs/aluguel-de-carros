const express = require('express');
const router = express.Router();
const esportControl = require('../controladores/esportControl');

router.post('/carro-esportivo', esportControl.inserir);

module.exports = router;