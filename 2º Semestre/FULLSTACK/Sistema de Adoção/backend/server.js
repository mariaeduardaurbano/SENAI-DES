require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

// const adocaoRoutes = require("./src/routes/adocao.routes");
// const adotanteRoutes = require("./src/routes/adotante.routes");
const animalRoutes = require("./src/routes/animal.routes");

app.use(express.json());
app.use(cors());

// app.use(adocaoRoutes);
// app.use(adotanteRoutes);
app.use(animalRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
});