const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./database');
const authRoutes = require('./routes/auth');
const equipamentosRoutes = require('./routes/equipamentos');
const emprestimosRoutes = require('./routes/emprestimos');
const devolucoesRoutes = require('./routes/devolucoes'); // Importar as rotas de devoluções

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/equipamentos', equipamentosRoutes);
app.use('/emprestimos', emprestimosRoutes);
app.use('/devolucoes', devolucoesRoutes); // Usar as rotas de devoluções

sequelize.sync({ alter: true }) // Sincronizar o banco de dados
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso.');
        const port = process.env.PORT || 3000; // Use a variável de ambiente PORT ou 3000 como padrão
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });