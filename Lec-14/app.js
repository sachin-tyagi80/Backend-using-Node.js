const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let Products = [
  {
    P_name: "Phone",
    P_id: 111,
    P_price: 100000,
    url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    P_name: "Earbuds",
    P_id: 112,
    P_price: 9999,
    url: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    P_name: "Watch",
    P_id: 114,
    P_price: 8999,
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
];

app.get("/products", (req, res) => {
  res.render("index", { Products });
});

app.get("/product/:id", (req, res) => {
  let p = Products.filter((data) => {
    return data.id == req.params.id;
  });
  console.log(p);
  if(!p)
    res.render("show",{p});
  
  else
    res.render("invalid")
});
app.listen(4001, () => {
  console.log("app is running at port 4001");
});

