const express = require("express");
const {
  getHomePage,
  getABC,
  getHungdeptrai,
  getCreatePage,
  getUpdatePage,
  postCreateUser,
  postUpdateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getABC);

router.get("/hungdeptrai", getHungdeptrai);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

module.exports = router;
