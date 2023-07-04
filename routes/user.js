const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../data/db");

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blogs", function (req, res) {
  db.execute("SELECT * FROM blog whre verify=1")
    .then((result) => {
      res.render("users/blogs", {
        blogs: result[0],
        categories: data.categories,
        title: "Tüm Kurslar",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.use("/", function (req, res) {
  db.execute("SELECT * FROM blog where home=1 and verify=1")
    .then((result) => {
      db.execute("SELECT * FROM category")
        .then((result2) => {
          res.render("users/index", {
            blogs: result[0],
            categories: result2[0],
            title: "Popüler Kurslar",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
