const express = require("express");
const {
  getHomePage,
  getABC,
  getHungdeptrai,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/hungdeptrai", getHungdeptrai);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
