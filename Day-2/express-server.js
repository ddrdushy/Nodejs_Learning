var express=require("express");
var app=express();

app.use("/static",express.static("static"));
app.get("/",function(req,res){
    res.end("Hello World");
});

app.listen(3000,'127.0.0.1',()=>{
    console.log("Server is Listening on port 3000");
});