const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database'); // Importar a configuração do Sequelize

class Equipamento extends Model {}

Equipamento.init({
    tamanho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false // Adicionar a restrição NOT NULL
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'disponivel' // Status inicial como disponível
    }
}, {
    sequelize,
    modelName: 'Equipamento',
    tableName: 'equipamentos', // Nome da tabela
    freezeTableName: true, // Desativar a pluralização automática
    timestamps: true // Adicionar colunas createdAt e updatedAt
});

module.exports = Equipamento;