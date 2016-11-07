var express=require("express");
var app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(3000,function(){
    console.log("Chat app listening on port 3000");
});