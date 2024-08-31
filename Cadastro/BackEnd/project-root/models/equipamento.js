const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Importar a configuração do Sequelize

const Equipamento = sequelize.define('Equipamento', {
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'equipamentos', // Nome da tabela
    freezeTableName: true, // Desativar a pluralização automática
    timestamps: true // Adicionar colunas createdAt e updatedAt
});

module.exports = { Equipamento };