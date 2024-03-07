const express = require('express');
const router = express.Router();

const promocaoControl = require('../controladores/promocaoControl');

router.post('/promocao', promocaoControl.inserir);
router.post('/enviar-promocao', promocaoControl.enviarPromocao);

module.exports = router;