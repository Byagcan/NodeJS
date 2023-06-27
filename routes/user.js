const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blog", function (req, res) {
  res.render("users/blogs");
});

router.use("/", function (req, res) {
  res.render("users/index");
});

module.exports = router;
