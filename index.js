const express = require("express");
const app = express();

app.set("view engine", "ejs");

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
