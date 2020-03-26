// Dependencies
var mysql = require("mysql");

// SQL set up
var connection = mysql.createConnection({
    host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wzzm42aq7wr27zfh",
    password: "blbkfqcb1vzkypau",
    database: "gfrcbu09bx8xal7z"
});

connection.connect((err) => {
    if (err) throw err;

});

module.exports = connection;
