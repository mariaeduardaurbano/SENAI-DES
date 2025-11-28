const express = require('express');
const cors = require('cors');

const ingressosRoutes = require("./src/routes/ingressos.routes");
const comidasRoutes = require("./src/routes/comidas.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(ingressosRoutes);
app.use(comidasRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});