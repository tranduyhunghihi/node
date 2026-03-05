require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");
const connection = require("./config/database");

const app = express(); //app express
const port = process.env.PORT || 8080; //port
const hostname = process.env.HOST_NAME;

// console.log("check env", process.env);

//config template engine
configViewEngine(app);
//khai bao route
app.use("/", webRoute);

//test connection

connection.query("SELECT * FROM Users", function (err, result, fields) {
  console.log("result >>", result), console.log("fields >>", fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
