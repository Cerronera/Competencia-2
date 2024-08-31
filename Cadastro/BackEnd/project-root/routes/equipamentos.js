const express = require('express');
const router = express.Router();
const { cadastrarEquipamento } = require('../controllers/equipamentosController');

router.post('/register', cadastrarEquipamento);

module.exports = router;