const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/add-users", (req, res, next) => {
  //   console.log("in another user middleware");
  res.send(
    "<form action='/users' method='POST'><input type='text' name='title'/><button type='submit'>submit</button></form>"
  );
  //   next();
});
app.use("/users", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
  //   next();
});
app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>hello from express</h1>");
  //   next();
});
app.listen(4500);
