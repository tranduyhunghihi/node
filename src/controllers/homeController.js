const connection = require("../config/database");
const { getAllUsers, updateUserById } = require("../services/CRUDservice");

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

const getUpdatePage = async (req, res) => {
  let results = await getAllUsers();

  const userId = req.params.id;

  return res.render("edit.ejs", { listUsers: results, userId });
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  // console.log("check value >>", email, name, city, userId);

  await updateUserById(email, name, city, userId);

  // console.log("check results: ", results);

  res.redirect("/");
};

module.exports = {
  getHomePage,
  getABC,
  getHungdeptrai,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
