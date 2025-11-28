const connection = require("mysql2/promise");

const pool = connection.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "salaDeEstudos"
});

module.exports = pool;