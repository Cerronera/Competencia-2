const express = require('express');
const router = express.Router();
const Emprestimo = require('../models/emprestimo'); // Corrigir caminho
const Equipamento = require('../models/equipamento'); // Corrigir caminho
const Devolucao = require('../models/devolucao'); // Corrigir caminho

router.get('/dados', async (req, res) => {
    try {
        const emprestimos = await Emprestimo.findAll();
        const equipamentos = await Equipamento.findAll();
        const devolucoes = await Devolucao.findAll();

        res.json({
            emprestimos,
            equipamentos,
            devolucoes
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;