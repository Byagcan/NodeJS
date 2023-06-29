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
  blogs: [
    {
      blogid: 1,
      title: "Komple Uygulamalı Web Programlama",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/static/images/webdeveloper.jpg",
    },
    {
      id: 2,
      title: "Komple Uygulamalı Mobil Programlama",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/static/images/android.jpg",
    },
    {
      id: 3,
      title: "Komple Uygulamalı IOS Programlama",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/static/images/iosdeveloper.png",
    },
  ],
};

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");
});

router.use("/blog", function (req, res) {
  res.render("users/blogs", data);
});

router.use("/", function (req, res) {
  res.render("users/index", data);
});

module.exports = router;
