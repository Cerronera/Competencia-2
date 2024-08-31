const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./database');
const authRoutes = require('./routes/auth');
const equipamentosRoutes = require('./routes/equipamentos');
const emprestimosRoutes = require('./routes/emprestimos');
const devolucoesRoutes = require('./routes/devolucoes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/equipamentos', equipamentosRoutes);
app.use('/emprestimos', emprestimosRoutes); // Usar a rota de empréstimos
app.use('/devolucoes', devolucoesRoutes); // Usar a rota de devoluções

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });