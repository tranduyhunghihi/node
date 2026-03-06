const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("Hung dep trai vl hihi");
};

const getHungdeptrai = (req, res) => {
  // res.send("<h1>Hello world</h1>");
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
  res.send("hung dep trai ");
};

module.exports = {
  getHomePage,
  getABC,
  getHungdeptrai,
  postCreateUser,
};
