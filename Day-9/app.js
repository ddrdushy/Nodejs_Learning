var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.set("views","./views");
app.set('view engine','jade');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index",{title:"Home"});
});

var admin=require("./admin");
admin(app);

app.listen(3000,function(){
    console.log("Chat app listening on port 3000");
});