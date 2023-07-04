const config = require("../config");
const mysql = require("mysql2");
let connection = mysql.createConnection(config.db);

connection.connect(function (err) {
  if (err) return console.log(err);
  console.log("Connected!");
});

module.exports = connection.promise();
