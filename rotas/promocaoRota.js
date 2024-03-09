const express = require('express');
const router = express.Router();

const promocaoControl = require('../controladores/promocaoControl');

router.post('/promocao', promocaoControl.inserir);
router.post('/promocao-enviar', promocaoControl.enviarPromocao);
router.delete('/promocao-deletar', promocaoControl.deletar);

module.exports = router;