// Dependencies
var mysql = require("mysql");

// SQL set up
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "myPassroot4sql$",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) throw err;

});

module.exports = connection;
