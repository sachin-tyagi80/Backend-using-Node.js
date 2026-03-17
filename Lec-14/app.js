let express=require('express');
let app=express();
let path=require('path');
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

let Products=[
  {
    Pname:"Phone",p_id:111,P_price:100000,
    url:"https://unsplash.com/photos/white-smartphone-near-laptop-xsGxhtAsfSA"
  },
  {
    Pname:"earbuds",p_id:112,P_price:9999,
    url:"https://unsplash.com/photos/round-silver-colored-chronograph-watch-with-brown-leather-strap-12V36G17IbQ"
  },
  {
    Pname:"watch",p_id:114,P_price:8999,
    url:"https://unsplash.com/photos/a-pair-of-black-earphones-sitting-on-top-of-a-table-ymfiokQznTo"
  }
]

app.get("/products",(req,res)=>{
  res.render("index",{Products});
})


app.listen(4001,()=>{
  console.log("app is running at port 4001");
})