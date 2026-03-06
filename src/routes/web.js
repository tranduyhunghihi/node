const express = require("express");
const {
  getHomePage,
  getABC,
  getHungdeptrai,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/hungdeptrai", getHungdeptrai);

router.post("/create-user", postCreateUser);

module.exports = router;
