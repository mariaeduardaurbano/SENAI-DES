const express = require("express"); //importa um modulo
const cors = require("cors"); 

QuartosRoutes = require("./src/routes/quartos.routes");

const app = express();

app.use(express.json());//habilita comunicação via JSON
app.use(cors());//habilita requisição local

//Importar as Rotas Configuradas
app.use(QuartosRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000")
});