var express=require("express");
var app=express();

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get("/",(req,res)=>{
    res.render("index.jade");
});
app.get("/admin/rooms",(req,res)=>{
    res.render("rooms.jade");
});

app.listen(3000,function(){
    console.log("Chat app listening on port 3000");
});