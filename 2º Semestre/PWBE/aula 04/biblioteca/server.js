const express = require("express"); //importa um modulo
const cors = require("cors"); 

UsuariosRoutes = require("./src/routes/usuarios.routes");
LivrosRoutes = require("./src/routes/livros.routes");

const app = express();

app.use(express.json());//habilita comunicação via JSON
app.use(cors());//habilita requisição local

//Importar as Rotas Configuradas
app.use(UsuariosRoutes);
app.use(LivrosRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000")
});