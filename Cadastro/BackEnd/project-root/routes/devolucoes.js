const express = require('express');
const router = express.Router();
const Emprestimo = require('../models/emprestimo');
const Devolucao = require('../models/devolucao');

// Rota para devolver um equipamento
router.post('/', async (req, res) => {
    try {
        console.log('Recebida requisição para devolver equipamento:', req.body);
        const { nome_usuario, codigo, dataDevolucao } = req.body;
        
        // Verificar se os parâmetros estão sendo recebidos corretamente
        if (!nome_usuario || !codigo || !dataDevolucao) {
            console.error('Parâmetros inválidos:', { nome_usuario, codigo, dataDevolucao });
            return res.status(400).json({ error: 'Parâmetros inválidos' });
        }

        const emprestimo = await Emprestimo.findOne({ where: { nome_usuario, codigo } });

        if (!emprestimo) {
            console.error('Empréstimo não encontrado');
            return res.status(404).json({ error: 'Empréstimo não encontrado' });
        }

        // Registrar a devolução na tabela Devolucaos
        const devolucao = await Devolucao.create({
            nome_usuario,
            codigo,
            dataDevolucao
        });

        // Dar baixa na tabela Emprestimos
        await emprestimo.destroy();

        console.log('Equipamento devolvido com sucesso:', devolucao);
        res.status(200).json(devolucao);
    } catch (error) {
        console.error('Erro ao devolver equipamento:', error);
        res.status(500).json({ error: 'Erro ao devolver equipamento', details: error.message });
    }
});

module.exports = router;