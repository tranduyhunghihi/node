require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");

const app = express(); //app express
const port = process.env.PORT || 8080; //port
const hostname = process.env.HOST_NAME;

// console.log("check env", process.env);

//config template engine
configViewEngine(app);
//khai bao route
app.use("/", webRoute);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
