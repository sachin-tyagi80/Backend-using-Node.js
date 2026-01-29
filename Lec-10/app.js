//Express.js Basics
const express = require("express");
let bodyparser = require("body-parser");
const app = express();

// app.get("/product/:id", (req, res) => {
//   console.log(req.params); // { id: '123' }
//   res.send("this ia a product route");
// });

// app.get("/todo/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send("this is a todo route");
// });

/////////////////////////////
//Routing (GET & POST)
let path = require("path");
//Template Engine – EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// middleware
app.use(bodyparser.urlencoded({ extended: true }));

let obj = {
  id: 1212,
};
//Passing Data to Views (EJS)
app.get("/", (req, res) => {
  res.render("index", { obj });
});

let todo = ["coding", "reading books", "go to market"];

app.get("/register", (req, res) => {
  res.render("register");
});
//body-parser (Form Data Handling)
app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("user registered successfully...");
});

app.get("/todos", (req, res) => {
  res.render("index1", { todo });
});

app.listen(3000, () => {
  console.log("app is running at port 3000");
});
