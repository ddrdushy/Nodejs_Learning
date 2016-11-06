var express=require("express");
var favicon=require("serve-favicon");

var app=express();
app.use("/static",express.static("static"));
app.use(favicon(__dirname+"/static/favicon.ico"));

app.get("/",(req,res)=>{
   res.end("Hello World");
});

app.listen(3000,"127.0.0.1",()=>{
   console.log("Server Listening on port 3000");
});