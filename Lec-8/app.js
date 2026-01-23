// let express = require("express");

// let app = express();
// __dirname;
// app.get("/", (req, res) => {
//   res.send("this is /route");
// });

// app.get("/login", (req, res) => {
//   res.send("this is / login route");
// });
// app.get("/register", (req, res) => {
//   res.send("this is / register route");
// });

// app.get("/signup", (req, res) => {
//   res.send("index ");
// });
// app.listen(8000, () => {
//   console.log("app is running at port 8000");
// });
let express = require("express");
let path = require("path");
let ejs = require("ejs");
let app = express();

app.set("view engine", "ejs");
app.set(path.join(__dirname, "views"));
app.set("view", __dirname + "/views");
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000, () => {
  console.log("app is running at port 3000");
});
