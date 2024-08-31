const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Emprestimo = sequelize.define('Emprestimo', {
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataEmprestimo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataDevolucao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Emprestimo;