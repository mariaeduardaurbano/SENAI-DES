const express = require('express');
const cors = require('cors');

const clientesRoutes = require("./src/routes/clientes.routes");
const filmesRoutes = require("./src/routes/filme.routes");
const locacoesRoutes = require("./src/routes/locacoes.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(clientesRoutes);
app.use(filmesRoutes);
app.use(locacoesRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});