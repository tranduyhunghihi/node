const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDservice");

const getHomePage = async (req, res) => {
  // console.log("check result >>", results);
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Hung dep trai vl hihi");
};

const getHungdeptrai = (req, res) => {
  // res.send("<h1>Hello world</h1>");
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  // console.log("check value >>", email, name, city);

  let [results, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?, ?, ?)",
    [email, name, city]
  );

  console.log("check results: ", results);

  res.send("create user success");
  // console.log(req.body);

  // const [results, fields] = await connection.query("select * from Users");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getHungdeptrai,
  postCreateUser,
  getCreatePage,
};
