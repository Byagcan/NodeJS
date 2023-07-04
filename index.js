const express = require("express");
const app = express();
const config = require("./config");

app.set("view engine", "ejs");

const mysql = require("mysql2");
let connection = mysql.createConnection(config.db);

connection.connect(function (err) {
  if (err) return console.log(err);
  console.log("Connected!");
});

connection.query("SELECT * FROM blog", function (err, results) {
  if (err) throw err;
  console.log(results);
});

const path = require("path");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(userRoutes);

//en özel route en üstte olmalı

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
