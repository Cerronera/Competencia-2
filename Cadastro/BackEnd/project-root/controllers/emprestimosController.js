const Emprestimo = require('../models/emprestimo');
const Equipamento = require('../models/equipamento');

exports.registrarEmprestimo = async (req, res) => {
    const { nome_usuario, tamanho, quantidade, tipo, codigo_produto, dataEmprestimo, dataDevolucao, telefone } = req.body;
    try {
        // Verificar se o equipamento existe e está disponível
        const equipamento = await Equipamento.findOne({ where: { codigo_produto, status: 'disponivel' } });
        if (!equipamento) {
            return res.status(400).json({ error: 'Equipamento não disponível ou não encontrado' });
        }

        const novoEmprestimo = await Emprestimo.create({
            nome_usuario,
            tamanho,
            quantidade,
            tipo,
            codigo_produto,
            dataEmprestimo,
            dataDevolucao,
            telefone
        });

        // Atualizar o status do equipamento para 'emprestado'
        equipamento.status = 'emprestado';
        await equipamento.save();

        res.status(201).json(novoEmprestimo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};