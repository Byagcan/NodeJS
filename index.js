const express = require("express");
const app = express();

const path = require("path");

//en özel route en üstte olmalı

app.use("/blogs/:blogid", function (req, res) {
  console.log(__dirname);
  console.log(__filename);
  console.log(req.params);

  res.sendFile(path.join(__dirname, "views/users", "blog-details.html"));
});

app.use("/blog", function (req, res) {
  res.sendFile(path.join(__dirname, "views/users", "blogs.html"));
});

app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/users", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
