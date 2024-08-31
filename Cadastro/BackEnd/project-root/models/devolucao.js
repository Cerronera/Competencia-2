const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Devolucao = sequelize.define('Devolucao', {
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataDevolucao: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Devolucao;