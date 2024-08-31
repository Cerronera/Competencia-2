const bcrypt = require('bcrypt');
const { Usuario } = require('../models/usuario');

exports.cadastrarUsuario = async (req, res) => {
    const { nome_completo, idade, cpf, peso, posicao, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    try {
        const novoUsuario = await Usuario.create({
            nome_completo,
            idade,
            cpf,
            peso,
            posicao,
            email,
            senha: hashedPassword
        });
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario || !await bcrypt.compare(senha, usuario.senha)) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }
        res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};