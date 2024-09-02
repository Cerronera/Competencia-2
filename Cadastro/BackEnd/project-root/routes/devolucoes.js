const express = require('express');
const router = express.Router();
const devolucoesController = require('../controllers/devolucoesController'); // Certifique-se de que o caminho está correto

// Rota para registrar uma devolução
router.post('/', devolucoesController.registrarDevolucao);

module.exports = router;