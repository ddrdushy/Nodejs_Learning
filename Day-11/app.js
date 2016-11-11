var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var passport=require("passport");

app.set("views","./views");
app.set('view engine','jade');

app.use(require("./logging.js"));

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));

require('express-debug'),(app,{});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get("/",(req,res,next)=>{
    res.render("home",{title:"Home"});
});

var authRouter = require("./auth");
app.use(authRouter);

var adminRouter=require("./admin");
app.use("/admin",adminRouter);

var apiRouter=require("./api");
app.use("/api",apiRouter);


app.listen(3000,function(){
    console.log("Chat app listening on port 3000");
});