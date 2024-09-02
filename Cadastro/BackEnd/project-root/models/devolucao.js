const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database'); // Importar a configuração do Sequelize

class Devolucao extends Model {}

Devolucao.init({
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Devolucao',
    tableName: 'Devolucaos', // Nome da tabela no banco de dados
    freezeTableName: true, // Desativar a pluralização automática
    timestamps: true // Adicionar colunas createdAt e updatedAt
});

module.exports = Devolucao;