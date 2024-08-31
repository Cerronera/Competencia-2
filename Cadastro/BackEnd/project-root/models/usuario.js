const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importar a configuração do Sequelize

const Usuario = sequelize.define('Usuario', {
    nome_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    peso: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    posicao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'usuarios', // Nome da tabela
    freezeTableName: true, // Desativar a pluralização automática
    timestamps: true // Adicionar colunas createdAt e updatedAt
});

module.exports = { Usuario };