let express = require("express");
let app = express();
__dirname;
app.get("/", (req, res) => {
  res.send("this is /route");
});

app.get("/login", (req, res) => {
  res.send("this is / login route");
});
app.get("/register", (req, res) => {
  res.send("this is / register route");
});

app.get("/signup", (req, res) => {
  res.send("index ");
});
app.listen(8000, () => {
  console.log("app is running at port 8000");
});
