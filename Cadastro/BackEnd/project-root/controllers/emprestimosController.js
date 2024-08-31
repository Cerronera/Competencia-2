const { Emprestimo } = require('../models/emprestimo');

exports.registrarEmprestimo = async (req, res) => {
    const { nome_usuario, tamanho, quantidade, tipo, codigo_produto, data_emprestimo, data_devolucao, telefone } = req.body;
    try {
        const novoEmprestimo = await Emprestimo.create({
            nome_usuario,
            tamanho,
            quantidade,
            tipo,
            codigo_produto,
            data_emprestimo,
            data_devolucao,
            telefone
        });
        res.status(201).json(novoEmprestimo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};