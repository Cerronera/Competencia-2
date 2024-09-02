const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database'); // Certifique-se de que o caminho está correto

class Emprestimo extends Model {}

Emprestimo.init({
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
    codigo_produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataEmprestimo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataDevolucaoPrometida: {
        type: DataTypes.DATE,
        allowNull: false, // Data prometida para devolução
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dataDevolucao: {
        type: DataTypes.DATE,
        allowNull: true // Permitir valores nulos para indicar que o empréstimo ainda está em aberto
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Não devolvido' // Status inicial do empréstimo
    }
}, {
    sequelize,
    modelName: 'Emprestimo',
    tableName: 'Emprestimos',
    timestamps: true
});

module.exports = Emprestimo;