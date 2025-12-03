const database = require("mysql2/promise")

const connection = database.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "adocao"
});

module.exports = connection;