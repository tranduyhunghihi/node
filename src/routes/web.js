const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/hihi", (req, res) => {
  res.send("Hung dep trai vl hihi");
});

router.get("/hungdeptrai", (req, res) => {
  // res.send("<h1>Hello world</h1>");
  res.render("sample.ejs");
});

module.exports = router;
