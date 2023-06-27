const express = require("express");
const app = express();

//en özel route en üstte olmalı

app.use("/about/:aboutid", function (req, res) {
  console.log(req.params);
  res.send("about detail");
});

app.use("/about", function (req, res) {
  res.send("about");
});

app.use("/", function (req, res) {
  res.send("home");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
