const express = require("express"); 
const cors = require("cors"); 

ClientesRoutes = require("./src/routes/clientes.routes");
ProdutosRoutes = require("./src/routes/produtos.routes");
ComprasRoutes = require("./src/routes/compras.routes");

const app = express();

app.use(express.json());
app.use(cors());


app.use(ClientesRoutes);
app.use(ProdutosRoutes);
app.use(ComprasRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000")
});