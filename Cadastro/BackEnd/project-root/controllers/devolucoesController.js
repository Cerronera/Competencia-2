const { Devolucao } = require('../models/devolucao');

exports.registrarDevolucao = async (req, res) => {
    const { nome_usuario, telefone, data_devolucao, quantidade, codigo_produto, estado_equipamento } = req.body;
    try {
        const novaDevolucao = await Devolucao.create({
            nome_usuario,
            telefone,
            data_devolucao,
            quantidade,
            codigo_produto,
            estado_equipamento
        });
        res.status(201).json(novaDevolucao);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};