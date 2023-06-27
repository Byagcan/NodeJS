const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blog/create", function (req, res) {
  res.render("users/blog-create");
});

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
  res.render("users/blog-list");
});

module.exports = router;
