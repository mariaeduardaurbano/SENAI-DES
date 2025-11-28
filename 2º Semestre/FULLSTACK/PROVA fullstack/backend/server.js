const express = require('express');
const cors = require('cors');

const alunosRoutes = require('./src/routes/alunos.routes');
const salasRoutes = require('./src/routes/salas.routes');
const reservasRoutes = require('./src/routes/reservas.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(alunosRoutes);
app.use(salasRoutes);
app.use(reservasRoutes);

app.listen(3000, () => {
    console.log('Servidor online na porta 3000');
});