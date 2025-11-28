const express = require("express");
const cors = require("cors");

const reservasRoutes = require("./src/routes/reservas.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Use prefixos para cada grupo de rotas
app.use("/reservas", reservasRoutes);

app.get("/", (req, res) => {
    res.send("API Hotel");
});

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});