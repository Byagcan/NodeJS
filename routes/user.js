const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../data/db");

router.use("/blogs/:blogid", async function (req, res) {
  const blogid = req.params.blogid;
  try {
    const [blog] = await db.execute("SELECT * FROM blog where blogid=?", [
      blogid,
    ]);

    res.render("users/blog-details", {
      blog: blog[0],
    });
  } catch (error) {
    console.log(error);
  }
});

router.use("/blogs", async function (req, res) {
  try {
    const [blogs] = await db.execute("SELECT * FROM blog where verify=1");

    const [categories] = await db.execute("SELECT * FROM category");

    res.render("users/blogs", {
      blogs: blogs,
      categories: categories,
      title: "Tüm Kurslar",
    });
  } catch (error) {
    console.log(error);
  }
});

router.use("/", async function (req, res) {
  try {
    const [blogs] = await db.execute(
      "SELECT * FROM blog where home=1 and verify=1"
    );

    const [categories] = await db.execute("SELECT * FROM category");

    res.render("users/index", {
      blogs: blogs,
      categories: categories,
      title: "Popüler Kurslar",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
