const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database'); // Certifique-se de que o caminho está correto

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
    },
    dataDevolucaoReal: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataDevolucaoPrometida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    diasAtraso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado_equipamento: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Desconhecido' // Valor padrão
    }
}, {
    sequelize,
    modelName: 'Devolucao',
    tableName: 'Devolucaos', // Nome da tabela no banco de dados
    freezeTableName: true, // Desativar a pluralização automática
    timestamps: true
});

module.exports = Devolucao;