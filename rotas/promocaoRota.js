const express = require('express');
const router = express.Router();

const promocaoControl = require('../controladores/promocaoControl');

router.post('/promocao', promocaoControl.inserir);

module.exports = router;