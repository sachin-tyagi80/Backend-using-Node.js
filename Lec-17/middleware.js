let express=require('express');
let app=express();

// app.use((req,res,next)=>{
//     console.log("this is the first middleware");
//     next();
// });

app.get('/',(req,res)=>{
    res.send("this is a / route");
    console.log("this is the first middleware");
    //next();
});

app.listen(3000,()=>{
    console.log("app is running on port 3000");
})