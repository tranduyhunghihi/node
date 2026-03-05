const connection = require("../config/database");

const getHomePage = (req, res) => {
  let user = [];
  connection.query("SELECT * FROM Users", function (err, result, fields) {
    console.log("result >>", result), console.log("fields >>", fields);

    res.send(JSON.stringify(result));
  });
};

const getABC = (req, res) => {
  res.send("Hung dep trai vl hihi");
};

const getHungdeptrai = (req, res) => {
  // res.send("<h1>Hello world</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getHungdeptrai,
};
