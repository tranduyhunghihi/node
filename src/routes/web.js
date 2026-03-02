const express = require("express");
const {
  getHomePage,
  getABC,
  getHungdeptrai,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/hungdeptrai", getHungdeptrai);

module.exports = router;
