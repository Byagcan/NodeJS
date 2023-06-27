const express = require("express");
const router = express.Router();
const path = require("path");

const data = {
  title: "Popüler Kurslar",
  categories: [
    "Web Programming",
    "Mobile Programming",
    "IOS Programming",
    "AI Programming",
  ],
};

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blog", function (req, res) {
  res.render("users/blogs");
});

router.use("/", function (req, res) {
  res.render("users/index", data);
});

module.exports = router;
